from fastapi import APIRouter, UploadFile, File
from app.services.skill_analyzer import analyze_skills
router = APIRouter(prefix="/analyze")
@router.post("/")
async def analyze(file: UploadFile = File(...)):
result = await analyze_skills(file)
return result
