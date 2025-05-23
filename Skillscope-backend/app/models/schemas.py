from pydantic import BaseModel
class GitHubRequest(BaseModel):
github_username: str
