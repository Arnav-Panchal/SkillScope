import spacy
from app.utils.skill_data import SKILL_KEYWORDS, SKILL_CATEGORIES
from app.services.resume_parser import extract_text_from_resume
from app.utils.db import save_to_db
nlp = spacy.load("en_core_web_sm")
async def analyze_skills(file):
text = await extract_text_from_resume(file)
doc = nlp(text)
found = [token.text.lower() for token in doc if token.text.lower() in SKILL_KEYWORDS]
categorized = {}
for skill in found:
category = SKILL_CATEGORIES.get(skill, "Other")
categorized.setdefault(category, []).append(skill)
await save_to_db("user_id_dummy", categorized)
return categorized
