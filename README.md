# Marketing Content Generator

Marketing Content Generator is a full-stack application that helps users generate promotional content for different products, audiences, platforms, and tones. The project combines a React frontend with a FastAPI backend to deliver AI-assisted marketing copy generation through a simple web interface.

## Project Structure

```text
GEN AI Project/
|-- Backend/
|   |-- app.py
|   |-- generator.py
|   |-- load_dataset.py
|   |-- prompt_engineering.py
|   |-- vector_store.py
|   `-- marketing_dataset.json
|-- Frontend/
|   |-- src/
|   |-- public/
|   `-- package.json
`-- README.md
```

## Features

- Generate marketing content based on product, audience, platform, and tone
- FastAPI backend with a dedicated `/generate` endpoint
- React frontend for interactive content generation
- Modular backend structure for prompt engineering and content generation logic

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui

### Backend

- Python
- FastAPI
- Pydantic

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Tushar-2909/Marketing-Content-Generator.git
cd Marketing-Content-Generator
```

### 2. Set up the backend

Open a terminal in the `Backend` folder and create a virtual environment if needed.

```bash
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

Run the backend server:

```bash
uvicorn app:app --reload
```

The backend will be available at `http://127.0.0.1:8000`.

### 3. Set up the frontend

Open a second terminal in the `Frontend` folder:

```bash
npm install
npm run dev
```

The frontend will be available at the local Vite development URL, typically `http://localhost:5173`.

## API Overview

### `GET /`

Returns a simple health message indicating that the API is running.

### `POST /generate`

Accepts:

```json
{
  "product": "Product name",
  "audience": "Target audience",
  "platform": "Instagram",
  "tone": "Professional"
}
```

Returns:

```json
{
  "content": "Generated marketing content"
}
```

## Development Notes

- Keep environment variables in a local `.env` file and do not commit them.
- Keep `venv`, `node_modules`, and cache files out of version control.
- If frontend and backend run on different origins, adjust backend CORS settings for production use.

## Repository

GitHub repository:

`https://github.com/Tushar-2909/Marketing-Content-Generator`
