from sentence_transformers import SentenceTransformer
import faiss
import numpy as np
from load_dataset import load_data

# Load embedding model
model = SentenceTransformer("all-MiniLM-L6-v2")

# Load marketing dataset
texts = load_data()

# Convert dataset into embeddings
embeddings = model.encode(texts)

# Get vector dimension
dimension = embeddings.shape[1]

# Create FAISS index
index = faiss.IndexFlatL2(dimension)

# Add embeddings to vector database
index.add(np.array(embeddings).astype("float32"))


def search(query, k=3):
    """
    Search the vector database for similar marketing examples
    """

    # Convert query into embedding
    query_embedding = model.encode([query])

    # Search FAISS index
    distances, indices = index.search(
        np.array(query_embedding).astype("float32"), k
    )

    results = []

    # Retrieve similar texts
    for i in indices[0]:
        results.append(texts[i])

    return results