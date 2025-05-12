import ContinueLearningCard from '@/components/ContinueLearningCard';
import CourseCard from '@/components/CourseCard';
import ArrowRightSvg from '@/components/svgs/ArrowRightSvg';
import PlusSvg from '@/components/svgs/PlusSvg';
import axios from 'axios';
import { useEffect, useState } from 'react';
//import { useGetMyClassroomsData } from "@/hooks/useGetMyClassroomsData";

import { Link, useLocation, useNavigate } from 'react-router-dom';

const MyClassroom = () => {
  const [data, setData] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  const handelAddContent = () => {
    navigate('/my-classroom/create-course', {
      state: { from: location.pathname },
    });
  };
  // const { data, isLoading, isError, error } = useGetMyClassroomsData("team");

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (isError) {
  //   return <div>Error: {error.message || "Something went wrong"}</div>;
  // }
  // const data = [
  //   {
  //     "id": "A123",
  //     "type": "Video",
  //     "status": "In Review",
  //     "lastActivity": "09/12",
  //     "title": "Introduction to Real Estate Marketing Strategies",
  //     "progress": 45,
  //     "lessons": 10,
  //     "duration": "2 hrs"
  //   },

  //   {
  //     "id": "A123",
  //     "type": "Blog",
  //     "status": "In Review",
  //     "lastActivity": "09/12",
  //     "title": "Advanced CRM Features: Maximizing Efficiency",
  //     "progress": 50,
  //     "lessons": 10,
  //     "duration": "2 hrs"
  //   },
  //   {
  //     "id": "A123",
  //     "type": "Blog",
  //     "status": "In Review",
  //     "lastActivity": "09/12",
  //     "title": "Introduction to Real Estate Marketing Strategies",
  //     "progress": 45,
  //     "lessons": 10,
  //     "duration": "2 hrs"
  //   },

  //   {
  //     "id": "A123",
  //     "type": "Blog",
  //     "status": "In Review",
  //     "lastActivity": "09/12",
  //     "title": "Advanced CRM Features: Maximizing Efficiency",
  //     "progress": 50,
  //     "lessons": 10,
  //     "duration": "2 hrs"
  //   }
  // ]
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/my_classroom.json');
        setData(response.data);
      } catch (error) {
        console.error('Error Fetching Json: ', error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="my-container ">
        <div className="flex items-center justify-end mt-5 cursor-pointer">
          <div onClick={handelAddContent} className="flex items-center gap-3">
            <p className="text-sm leading-6 capitalize text-light tracking-[-0.14px] hover:text-secondary duration-300">
              Add content
            </p>
            <span className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border border-[#024040] bg-gradient-to-r from-black via-black to-[#024040] shadow-[0_0_0_1px_black]">
              <PlusSvg />
            </span>
          </div>
        </div>
        <h1 className="text-white section-title text-xl mt-5 mb-5">
          New Courses
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-5">
          {data?.map((item) => (
            <CourseCard key={item?.id} data={item} />
          ))}
        </div>
        <div className="flex items-center justify-end mt-3">
          <div className="flex items-center gap-3">
            <p className="text-sm leading-6 capitalize text-light tracking-[-0.14px] hover:text-secondary duration-300">
              View all new courses
            </p>
            <Link to="/my-classroom/courses">
              <button className="w-8 h-8 rounded-full flex items-center justify-center border border-[#4D4D4D] bg-[#242424] shadow-[0px_0px_0px_1px_#000]">
                <ArrowRightSvg />
              </button>
            </Link>
          </div>
        </div>
        <div>
          <h1 className="text-white text-xl mt-5 mb-5 section-title">
            Continue Learning
          </h1>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-5">
            {data?.map((item) => (
              <ContinueLearningCard key={item?.id} data={item} />
            ))}
          </div>
          <div className="flex items-center justify-end mt-3 mb-5">
            <Link to="" className="flex items-center gap-3">
              <p className="text-sm leading-6 capitalize text-light tracking-[-0.14px] hover:text-secondary duration-300">
                View all started courses
              </p>
              <button className="w-8 h-8 rounded-full flex items-center justify-center border border-[#4D4D4D] bg-[#242424] shadow-[0px_0px_0px_1px_#000]">
                <ArrowRightSvg />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyClassroom;
