import os
from dotenv import load_dotenv
from groq import Groq
from vector_store import search
from prompt_engineering import build_prompt

# Load environment variables
load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


def generate_marketing_content(product, audience, platform, tone):

    # Create search query
    query = f"{product} marketing"

    # Retrieve similar examples from vector DB
    examples = search(query)

    # Build prompt using retrieved examples
    prompt = build_prompt(product, audience, platform, tone, examples)

    try:

        response = client.chat.completions.create(
            model="llama-3.1-8b-instant",
            messages=[
                {"role": "user", "content": prompt}
            ],
            temperature=0.7,
            max_tokens=200
        )

        return response.choices[0].message.content

    except Exception as e:
        return f"Error generating content: {str(e)}"