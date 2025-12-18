from fastapi import APIRouter, Depends
from app.models.notes import NotesRequest
from app.services.notes_service import generate_notes
from app.core.firebase import verify_firebase_token

router = APIRouter(prefix="/notes", tags=["Notes"])

@router.post("/generate")
def generate(data: NotesRequest, user=Depends(verify_firebase_token)):
    return generate_notes(data.text)
