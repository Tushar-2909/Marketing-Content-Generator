from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from generator import generate_marketing_content


app = FastAPI(
    title="AI Marketing Content Generator API",
    version="1.0.0"
)

# -----------------------------
# CORS Configuration
# -----------------------------

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # change to frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------
# Request Model
# -----------------------------

class RequestData(BaseModel):
    product: str
    audience: str
    platform: str
    tone: str


# -----------------------------
# Response Model
# -----------------------------

class ResponseData(BaseModel):
    content: str


# -----------------------------
# Root Endpoint (optional)
# -----------------------------

@app.get("/")
def root():
    return {"message": "AI Marketing Generator API is running"}


# -----------------------------
# Generate Marketing Content
# -----------------------------

@app.post("/generate", response_model=ResponseData)
def generate(data: RequestData):

    try:

        content = generate_marketing_content(
            data.product,
            data.audience,
            data.platform,
            data.tone
        )

        return {"content": content}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))