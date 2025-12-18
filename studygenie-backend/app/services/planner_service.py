from app.utils.scheduler import generate_daywise_plan
from app.core.firebase import db

def create_study_plan(data, user_id):
    plan = generate_daywise_plan(
        [s.dict() for s in data.subjects],
        data.exam_date,
        data.hours_per_day
    )
    db.collection("study_plans").add({
        "user_id": user_id,
        "exam_date": data.exam_date,
        "subjects": [s.dict() for s in data.subjects],
        "plan": plan
    })
    return plan
