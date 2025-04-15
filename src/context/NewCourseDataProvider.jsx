import { createContext, useState } from 'react';
import { useForm } from 'react-hook-form';

const NewCourseDataContext = createContext(null);

const NewCourseDataProvider = ({ children }) => {
  const [courseData, setCourseData] = useState([]);

  const form = useForm();

  return (
    <NewCourseDataContext.Provider value={{ courseData, setCourseData, form }}>
      {children}
    </NewCourseDataContext.Provider>
  );
};

export { NewCourseDataContext, NewCourseDataProvider };
