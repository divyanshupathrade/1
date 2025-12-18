from datetime import datetime, timedelta

def generate_daywise_plan(subjects, exam_date, hours_per_day):
    days_left = max((datetime.fromisoformat(exam_date) - datetime.now()).days, 1)
    plan = {}
    for subject in subjects:
        for i in range(subject["chapters"]):
            date = (datetime.now() + timedelta(days=i % days_left)).strftime("%Y-%m-%d")
            plan.setdefault(date, []).append(f"{subject['name']} - Chapter {i+1}")
    return plan
