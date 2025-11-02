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

app = FastAPI(title="Emulator Games Server")

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

    # to wait until the game links are loaded
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.CSS_SELECTOR, "div.grid a")))
    html = driver.page_source
    driver.quit()

    soup = BeautifulSoup(html, "html.parser")
    game_links = soup.select("div.grid a[href*='/playstation-portable-rom-']")

    games = []
    for link in game_links:
        title_div = link.select_one("div.ml-2")
        href = link['href']

        # to make sure url is complete
        if href.startswith("/"):
            href = f"https://www.romsgames.net{href}"
            games.append({
                "title": title_div.text.strip() if title_div else "No Title",
                "url": href
            })

    return ApiResponseDTO(success=True, message=f"Fetched {len(games)} PSP games", data=games)