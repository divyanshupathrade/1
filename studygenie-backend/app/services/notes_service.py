from sklearn.feature_extraction.text import TfidfVectorizer

def generate_notes(text: str):
    vectorizer = TfidfVectorizer(stop_words="english", max_features=7)
    vectorizer.fit([text])
    return {
        "keywords": list(vectorizer.get_feature_names_out()),
        "summary": text.split('.')[:4]
    }
