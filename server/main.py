from fastapi import FastAPI
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup
from dtos.api_response import ApiResponseDTO
from database.postgres import get_db_cursor, init_db
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Emulator Games Server")

@app.on_event("startup")
def startup():
    init_db()

@app.get("/")
def root():
    url = "https://www.romsgames.net/roms/playstation-portable/"
    
    options = Options()
    options.binary_location = "C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe"
    options.add_argument("--headless")
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")

    driver = webdriver.Chrome(service=Service(ChromeDriverManager(driver_version="142.0.7444.60").install()), options=options)
    driver.get(url)

    # Wait until the game links are loaded
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.CSS_SELECTOR, "div.grid a")))
    html = driver.page_source
    driver.quit()

    soup = BeautifulSoup(html, "html.parser")
    game_links = soup.select("div.grid a[href*='/playstation-portable-rom-']")

    saved_count = 0
    duplicate_count = 0

    games = []
    for link in game_links:
        title_div = link.select_one("div.ml-2")
        if title_div:  # Added check to ensure title_div exists
            title = title_div.text.strip()
            href = link['href']

            # Make sure URL is complete
            if href.startswith("/"):
                href = f"https://www.romsgames.net{href}"
            
            img = link.select_one("img")
            image_url = img["src"] if img else None

            # Add to games list for response
            games.append({
                "title": title,
                "url": href,
                "image_url": image_url
            })

            try:
                with get_db_cursor() as cursor:
                    cursor.execute(
                        "INSERT INTO psp_games (title, url, image_url) VALUES (%s, %s, %s) ON CONFLICT (title, url) DO NOTHING", 
                        (title, href, image_url)
                    )

                    if cursor.rowcount > 0:
                        saved_count += 1
                    else:
                        duplicate_count += 1
            except Exception as e:
                print(f"Error saving game {title}: {e}")
    
    return ApiResponseDTO(
        success=True,
        message=f"Scraped {len(games)} PSP games, Saved {saved_count} new, Skipped {duplicate_count} duplicates",
        data=games,
        stats={
            "scraped": len(games),
            "saved": saved_count,
            "duplicates": duplicate_count
        }
    )

@app.get("/games")
def get_all_games():
    try: 
        with get_db_cursor() as cursor:
            cursor.execute("SELECT title, url, image_url FROM psp_games ORDER BY created_at DESC")
            games = cursor.fetchall()
            
            if not games:
                return ApiResponseDTO(
                    success=False,
                    message="No PSP games found in database",
                    data=[]
                )
            
            return  ApiResponseDTO(
                success=True,
                message=f"Retrieved {len(games)} PSP games from database",
                data=games
            )
    except Exception as err:
        print(f"Error retrieving games: {err}")
