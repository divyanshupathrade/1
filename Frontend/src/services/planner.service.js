import api from "./api";

export const generatePlan = (data) => {
  return api.post("/planner/generate", data);
};
