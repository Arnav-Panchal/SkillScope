from fastapi import APIRouter
from app.models.schemas import GitHubRequest
from app.services.github_parser import fetch_github_data
router = APIRouter(prefix="/github")
@router.post("/")
async def analyze_github(data: GitHubRequest):
repos = fetch_github_data(data.github_username)
return {"repos": repos}
