from fastapi import APIRouter

router = APIRouter(prefix="/analytics", tags=["Analytics"])

@router.get("/health")
def health():
    return {"status": "Analytics OK"}
