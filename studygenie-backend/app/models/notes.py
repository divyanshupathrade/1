from pydantic import BaseModel

class NotesRequest(BaseModel):
    text: str
