import io
from fastapi import UploadFile
import PyPDF2

async def extract_text_from_resume(file: UploadFile) -> str:
    contents = await file.read()
    # Example assumes PDF resume
    reader = PyPDF2.PdfReader(io.BytesIO(contents))
    text = ""
    for page in reader.pages:
        text += page.extract_text() or ""
    return text
