from fastapi import APIRouter, HTTPException

from services import chat_service
from schema.chat_schema import ChatSchema
from schema.scenario_schema import ScenarioSchema
from schema.chat_schema import ChatResponseSchema

router = APIRouter()

@router.get("/get_scenario", response_model=ScenarioSchema)
async def start_chat():
    try:
        scenario: ScenarioSchema = await chat_service.get_conversation_context()
    except Exception as error:
        raise HTTPException(status_code=500, detail="An error occured on the server.")
    return scenario

@router.post("/get_response", response_model=ChatResponseSchema)
async def get_response(payload: ChatSchema):
    try:
        agent_response, chat_history = await chat_service.get_chat_response(payload)
        respnose = ChatResponseSchema.model_validate({
            "agent_response": agent_response,
            "chat_context": chat_history
        })
    except Exception as error:
        raise HTTPException(status_code=500, detail="An error occured on the server.")

    return respnose
    











    
