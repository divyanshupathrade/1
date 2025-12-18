from fastapi import APIRouter, Depends
from app.models.planner import StudyPlanRequest
from app.services.planner_service import create_study_plan
from app.core.firebase import verify_firebase_token

router = APIRouter(prefix="/planner", tags=["Planner"])

@router.post("/generate")
def generate(data: StudyPlanRequest, user=Depends(verify_firebase_token)):
    plan = create_study_plan(data, user["uid"])
    return {"study_plan": plan}
