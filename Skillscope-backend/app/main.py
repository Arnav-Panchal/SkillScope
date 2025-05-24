from fastapi import FastAPI
from app.routers import upload, github, analyze
app = FastAPI()
# app.include_router(upload.router)
# app.include_router(github.router)
app.include_router(analyze.router)
