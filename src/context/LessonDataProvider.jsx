import { createContext, useState } from "react";
import { axiosPublic } from "@/lib/configs/axios.config";
import useLocalStorage from "@/hooks/useLocalstorage";

const LessonDataContext = createContext(null);

const LessonDataProvider = ({ children }) => {
  const [lessonData, setLessonData] = useState([])

  return (
    <LessonDataContext.Provider
      value={{ lessonData, setLessonData }}
    >
      {children}
    </LessonDataContext.Provider>
  );
};

export { LessonDataProvider , LessonDataContext  };
