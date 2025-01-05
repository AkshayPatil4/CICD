from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"message": "Welcome to the FastAPI Backend!"}

@app.get("/test")
def read_root():
    return {"message": "Hello from FastAPI!"}
    