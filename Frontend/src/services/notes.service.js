import api from "./api";

export const generateNotes = (text) => {
  return api.post("/notes/generate", { text });
};
