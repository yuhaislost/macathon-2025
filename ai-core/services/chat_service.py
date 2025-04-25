import json
from agents import Runner

from schema.chat_schema import ChatSchema

from agent_store.scenario_agent import ScenarioAgent
from agent_store.interaction_agent import InteractionAgent
from schema.scenario_schema import ScenarioSchema
from schema.interaction_schema import ChatInteractionSchema


async def get_conversation_context() -> ScenarioSchema:
    try:
        payload = await Runner.run(starting_agent=ScenarioAgent, input="")
    except Exception as error:
        raise RuntimeError(f"[Error]: {error}")
    
    scenario: ScenarioSchema = payload.final_output

    return scenario
    
async def get_chat_response(payload: ChatSchema) -> tuple[ChatInteractionSchema, list]:
    if payload.scenario_context != None:
        agent_scenario_data = {
            "scenario_agent": payload.scenario_context.scenario_agent,
            "setting_description": payload.scenario_context.setting_description,
            "age": payload.scenario_context.age,
            "personality": payload.scenario_context.personality,
            "appearance": payload.scenario_context.appearance,
            "recent_experiences": payload.scenario_context.recent_experiences,
            "backsotry": payload.scenario_context.backsotry,
            "dating_status": payload.scenario_context.dating_status,
            "romantic_interest": payload.scenario_context.romantic_interest
        }

        extra_sys_info = {
            "role": "system",
            "content": json.dumps(f"#Scenario & Personality description\nThe following contains a json regarding the scenario and profile you have to follow: {json.dumps(agent_scenario_data, indent=2)}", indent=2)
        }

        try:
            agent_payload = await Runner.run(starting_agent=InteractionAgent, input= [extra_sys_info] + payload.chat_context + [{"role": "user", "content": payload.user_response}])
        except Exception as error:
            raise RuntimeError(f"[Error]: {error}")
        return agent_payload.final_output, agent_payload.to_input_list()
    else:
        try:
            agent_payload = await Runner.run(starting_agent=InteractionAgent, input=payload.chat_context + [{"role": "user", "content": "payload.user_response"}])
        except Exception as error:
            raise RuntimeError(f"[Error]: {error}")
        return agent_payload.final_output, agent_payload.to_input_list()
        
        
