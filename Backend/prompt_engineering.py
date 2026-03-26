def build_prompt(product, audience, platform, tone, examples):

    context = "\n".join(examples)

    prompt = f"""

You are an expert marketing copywriter.

Here are examples of marketing content:

{context}

Now create a marketing message.

Product: {product}
Audience: {audience}
Platform: {platform}
Tone: {tone}

Write an engaging marketing post.
"""

    return prompt