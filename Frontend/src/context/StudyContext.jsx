import { createContext, useContext, useState } from "react";

const StudyContext = createContext();

export const StudyProvider = ({ children }) => {
  const [studyPlan, setStudyPlan] = useState(null);
  const [notes, setNotes] = useState(null);

  return (
    <StudyContext.Provider value={{ studyPlan, setStudyPlan, notes, setNotes }}>
      {children}
    </StudyContext.Provider>
  );
};

export const useStudy = () => useContext(StudyContext);
