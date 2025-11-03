import psycopg2
from psycopg2.extras import RealDictCursor
from contextlib import contextmanager
import os 

@contextmanager
def get_db_connection():
    conn = None 
    try: 
        conn = psycopg2.connect(os.getenv("DATABASE_URL"), cursor_factory=RealDictCursor)
        yield conn
    except Exception as error:
        print(f"Database connection error: {error}")
    finally:
        if conn:
            conn.close()

@contextmanager
def get_db_cursor():
    with get_db_connection() as conn:
        cursor = conn.cursor()
        try: 
            yield cursor 
            conn.commit()
        except:
            conn.rollback()
            raise
        finally:
            cursor.close()

def init_db():
    with get_db_cursor() as cursor:
        cursor.execute("""
        CREATE TABLE IF NOT EXISTS psp_games (
            id SERIAL PRIMARY KEY,
            title VARCHAR(200) UNIQUE NOT NULL,
            url TEXT UNIQUE NOT NULL,
            image_url TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
        """)
        print("Database initialized.")