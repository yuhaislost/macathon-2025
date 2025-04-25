from pydantic import BaseModel, Field, StrictStr, StrictInt, ConfigDict, StrictBool

class ChatInteractionSchema(BaseModel):
    response: StrictStr = Field(
        ...,
        description="The response for the conversation"
    )

    thoughts: StrictStr = Field(
        ...,
        description="The current thoughts regarding the previous response and or the entire conversation"
    )

    body_language: StrictStr = Field(
        ...,
        description="A brief and clear short description of your body language in third person (it should reflect your current thoughts)"
    )

    comfortability: StrictInt = Field(
        ...,
        description="A rating of how comfortable you are with the conversation so far, on a scale of 1 to 100"
    )

    conversation_end: StrictBool = Field(
        ...,
        description="Whether you would like to end the conversation or not"
    )

    model_config = ConfigDict(extra='forbid', strict=True)
    