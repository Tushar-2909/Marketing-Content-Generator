import json

def load_data():

    with open("marketing_dataset.json") as f:
        data = json.load(f)

    texts = []

    for item in data:
        texts.append(item["content"])

    return texts