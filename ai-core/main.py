from fastapi import FastAPI
from router.v1.chat import router as ChatRouter
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

app.include_router(ChatRouter, prefix="/chat")