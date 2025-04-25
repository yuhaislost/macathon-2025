from pydantic import BaseModel, Field, StrictStr, StrictInt, ConfigDict
from typing import List

class ChatSuggestion(BaseModel):
    response_number: StrictInt = Field(
        ...,
        description="The position of a specific response in the list of the user's responses"
    )

    suggestion: StrictStr = Field(
        ...,
        description="An alternative response the user could have used in the conversation that would have been socially better, and less awkward"
    )
    
    model_config = ConfigDict(extra='forbid', strict=True)

class CoachSchema(BaseModel):
    overall_feedback: StrictStr = Field(
        ...,
        description="A summary of how the user performed in the conversation"
    )

    overall_rating: StrictInt = Field(
        ...,
        description="A rating out of 100 for how well the user performed in the conversation, taking into account the context of the scenario, the other individual's thoughts etc."
    )

    suggestions: List[ChatSuggestion] = Field(
        ...,
        description="A list of alterantive response the user that would have been socially better, and less awkward"
    )