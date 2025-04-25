from agents import Agent, ModelSettings
import os

from schema.interaction_schema import ChatInteractionSchema

prompt_name = "interaction_agent"

current_working_directory = os.cwd()
prompt_store_path = os.path.join(current_working_directory, "prompts")
prompt_path = os.path.join(prompt_store_path, f"{prompt_name}.md")

if not os.path.isfile(prompt_path):
    raise FileNotFoundError(f"The prompt file {prompt_path} does not exist.")

prompt = ""

with open(prompt_path, "r") as prompt_file:
    prompt = prompt_file.read()


ScenarioAgent = Agent(
    name="A Person",
    instructions=prompt,
    model="gpt-4.1-mini",
    output_type=ChatInteractionSchema,
    model_settings=ModelSettings(temperature=1.0, top_p=1.0)
)