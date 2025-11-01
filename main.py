from fastapi import FastAPI

app = FastAPI(title="Emulator Games Server")

@app.get("/")
def root():
    return { "success": True, "message": "API is running", "data": []}