import { useForm, Controller } from "react-hook-form";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import ArrowLeftSvg from "@/components/svgs/ArrowLeftSvg";
import ThreeDotsSvg from "@/components/svgs/ThreeDotsSvg";
import PlusSvg from "@/components/svgs/PlusSvg";
import CancelButtonSvg from "@/components/svgs/CancelButtonSvg";
import EditButtonSvg from "@/components/svgs/EditButtonSvg";
import { useContext, useEffect, useState } from "react";
import { LessonDataContext } from "@/context/LessonDataProvider";
import { NewCourseDataContext } from "@/context/NewCourseDataProvider";

const CreateCourse = () => {
  const { courseData, setCourseData, form } = useContext(NewCourseDataContext);
  const { lessonData, setLessonData } = useContext(LessonDataContext);
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = form

  const onSubmit = (data) => {
    const newData = {
      ...data,
      lessonData,
    }
    setCourseData(prev => [...prev, newData])
    // navigate("/my-classroom/create-course/");
    console.log(newData)
    reset()
  };
 
  const handleCancel = (e) => {
    e.preventDefault();
    reset();
  }

  const handleAddClick = () => {
    navigate("/my-classroom/create-course/add-lessons/")
  }

  const handleLessonDelete = (title) => {
    if (title) {
      return setLessonData((prevData) => prevData.filter((data) => data.title !== title))
    }
  }
  

  // useEffect(()=>{
  //   const emptyCourse = {}
  //   const allCourses = JSON.parse(localStorage.getItem('course')) || []

  //   allCourses.push(emptyCourse)
  //   localStorage.setItem('course', JSON.stringify(allCourses));

  //   console.log('new courses array added to localStorage');
  // },[])

  return (
    <form className="my-container flex flex-col justify-between min-h-[80vh] h-full" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="flex items-center justify-between pt-6 md:pt-8 lg:pt-12 pb-4 md:pb-5 lg:pb-8 mb-4">
          <div className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit">
            <Link
              to={`${location.state?.from || "/my-classroom/courses"}`}
            >
              <ArrowLeftSvg />
            </Link>
            <h2 className="section-title">Create Content</h2>
          </div>
          <div className="p-2 border border-white rounded-full cursor-pointer">
            <ThreeDotsSvg />
          </div>
        </div>

        <div
          className="max-w-[670px]  flex flex-col gap-5 mb-8 sm:mb-16"
        >
          <div>
            <p className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
              What type of content are you creating?
            </p>
            <Controller
              name="contentType"
              control={control}
              defaultValue="Course"
              rules={{ required: "Content type is required" }}
              render={({ field }) => (
                <div className="flex space-x-4 mt-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      {...field}
                      value="Video"
                      checked={field.value === "Video"}
                    />
                    <p className="text-sm font-medium text-light">Video</p>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      {...field}
                      value="Blog"
                      checked={field.value === "Blog"}
                    />
                    <p className="text-sm font-medium text-light">Blog</p>
                  </label>
                </div>
              )}
            />
            {errors.contentType && (
              <p className="text-red-500 text-xs mt-1">
                {errors.contentType.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium text-light" htmlFor="title">Title</label>
            <input
              {...register("title", { required: "Title is required" })}
              id="title"
              type="text"
              className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm w-full"
              placeholder="Enter course title"
            />
            {errors.title && (
              <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium text-light" htmlFor="description">Description</label>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              id="description"
              rows="4"
              className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm w-full resize-none"
              placeholder="Write a description..."
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-xs mt-1">
                {errors.description.message}
              </p>
            )}
          </div>
          <div>
            <div className="flex flex-col items-start justify-end mt-5 cursor-pointer">
              <div className="flex flex-col gap-2 mb-5 max-w-[80%] w-full">
                <label className="text-sm font-medium text-light">Lessons</label>
                {lessonData.map((lesson,idx) => (
                  <div key={idx} className="flex gap-4 items-center">
                    <input type="text" className="flex-grow text-white font-Inter text-sm font-bold bg-[#151515]" disabled value={`${lesson.title || " "}`} />
                    <div className="flex gap-2 items-center">
                      <Link to={`/my-classroom/create-course/edit-lesson/${lesson.title}`}><div className="bg-[#242424] border-[#4D4D4D] border rounded-full p-2 w-fit"><EditButtonSvg /></div></Link>
                      <div onClick={() => handleLessonDelete(lesson.title)} className="bg-[#242424] border-[#4D4D4D] border rounded-full p-2 w-fit"><CancelButtonSvg /></div>
                    </div>
                  </div>))}
              </div>
              <div
                onClick={handleAddClick}
                className="flex items-center gap-3"
              >
                <p className="text-sm leading-6 capitalize text-light tracking-[-0.14px] hover:text-secondary duration-300 hover:opacity-60">
                  Add lesson
                </p>
                <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border border-[#024040] bg-gradient-to-r from-black via-black to-[#024040] shadow-[0_0_0_1px_black]">
                  <PlusSvg />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center sm:flex-row flex-col sm:space-y-0 space-y-4 justify-between pb-8">
        <input
          className="request-btn approve cursor-pointer px-6 py-3 bg-white text-black font-medium rounded-lg hover:opacity-80 duration-300"
          type="submit"
          value="Publish"
        />
        <button onClick={handleCancel} className="request-btn text-light bg-[#151515] px-6 py-3 rounded-lg hover:opacity-80 duration-300">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default CreateCourse;
