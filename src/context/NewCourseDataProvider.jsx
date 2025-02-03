import { createContext, useState } from "react";
import { axiosPublic } from "@/lib/configs/axios.config";
import useLocalStorage from "@/hooks/useLocalstorage";

const NewCourseDataContext = createContext(null);

const NewCourseDataProvider = ({ children }) => {
  const [courseData, setCourseData] = useState([])

  return (
    <NewCourseDataContext.Provider
      value={{ courseData, setCourseData }}
    >
      {children}
    </NewCourseDataContext.Provider>
  );
};

export { NewCourseDataProvider , NewCourseDataContext  };
