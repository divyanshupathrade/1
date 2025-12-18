from pydantic import BaseModel
from typing import List

class Subject(BaseModel):
    name: str
    difficulty: int
    chapters: int

class StudyPlanRequest(BaseModel):
    subjects: List[Subject]
    hours_per_day: int
    exam_date: str
