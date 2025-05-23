import motor.motor_asyncio
client = motor.motor_asyncio.AsyncIOMotorClient("mongodb://localhost:27017")
db = client["skillscope"]
async def save_to_db(user_id: str, skills: dict):
await db["analyses"].insert_one({"user_id": user_id, "skills": skills})
