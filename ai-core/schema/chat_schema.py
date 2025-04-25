from pydantic import BaseModel

from schema.scenario_schema import ScenarioSchema
from schema.interaction_schema import ChatInteractionSchema

class ChatSchema(BaseModel):
    user_response: str
    scenario_context: ScenarioSchema | None
    chat_context: list

class ChatResponseSchema(BaseModel):
    agent_response: ChatInteractionSchema
    chat_context: list