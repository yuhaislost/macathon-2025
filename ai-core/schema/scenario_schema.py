from pydantic import BaseModel, Field, StrictStr, StrictInt, ConfigDict
from typing import Literal


class ScenarioSchema(BaseModel):
    scenario_user: StrictStr = Field(
        ...,
        description="The scenario, and context for where the user is meeting the person described by the constructed profile for the first time"
    )

    scenario_agent: StrictStr = Field(
        ...,
        description="The scenario, and context for the person described by the constructed profile and has no information about the user"
    )

    setting_description: StrictStr = Field(
        ...,
        description="A detailed description of the setting, including the location, time of day, the weather, recent events, and any other relevant information that would help someone gain context of the scenario, and setting"
    )

    gender: Literal["male", "female"] = Field(
        ...,
        description="The gender of the person in the profile"
    )

    age: StrictInt = Field(
        ...,
        description="The of the person in the profile, in years (19 to 25)"
    )

    personality: StrictStr = Field(
        ...,
        description="A detailed personality breakdown of the person in the profile, including their likes, dislikes, hobbies, interests, and any other relevant information that would help someone act out the person better",
    )

    appearance: StrictStr = Field(
        ...,
        description="The summary of the person's appearance, including their height, hair color, eye color, what they are wearing, hair style, and any other relevant information that would help someone act out the person better"
    )

    occupation: StrictStr = Field(
        ...,
        description="A quick summary of the person's occupation (e.g Student (+ what they are studying + where they are studying + how much have they gotten through their degree), Engineer, Doctor, etc.)"
    )

    recent_experiences: StrictStr = Field(
        ...,
        description="A summary of the person's recent experiences, including any recent events that have happened in their life, and any other relevant information that would help someone act out the person better"
    )

    backsotry: StrictStr = Field(
        ...,
        description="A summary of the person's backstory, thier childhood, their family and any other relevant information that would help someone act out the person better"
    )

    dating_status: Literal["single", "in a relationship"] = Field(
        ...,
        description="The dating status of the person in the profile"
    )

    romantic_interest: Literal["currently seeking someone", "not currently seeking a partner"] = Field(
        ...,
        description="The romantic interest of the person in the profile"
    )

    model_config = ConfigDict(extra="forbid", strict=True)