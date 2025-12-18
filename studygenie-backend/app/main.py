from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import planner, notes, analytics

app = FastAPI(title="StudyGenie API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(planner.router)
app.include_router(notes.router)
app.include_router(analytics.router)

@app.get("/")
def root():
    return {"message": "StudyGenie Backend Running"}
