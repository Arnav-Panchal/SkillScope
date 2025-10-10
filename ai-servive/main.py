from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class ResumeRequest(BaseModel):
    text: str

@app.get("/")
def root():
    return {"message": "AI Service Running!"}

@app.post("/api/analyze-resume")
def analyze_resume(request: ResumeRequest):
    # Placeholder: return dummy domain scores
    return {"Frontend": 80, "Backend": 70, "DevOps": 50, "DataScience": 60}
