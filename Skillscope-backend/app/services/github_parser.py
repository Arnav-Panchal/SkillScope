from github import Github
def fetch_github_data(username: str):
g = Github()
user = g.get_user(username)
return [repo.name for repo in user.get_repos()]
