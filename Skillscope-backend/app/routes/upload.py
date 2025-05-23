from fastapi import APIRouter, UploadFile, File
from app.services.resume_parser import extract_text_from_resume
router = APIRouter(prefix="/upload")
@router.post("/")
async def upload_resume(file: UploadFile = File(...)):
text = await extract_text_from_resume(file)
return {"text": text}
