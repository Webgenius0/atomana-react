import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import ArrowLeftSvg from "@/components/svgs/ArrowLeftSvg";
import ThreeDotsSvg from "@/components/svgs/ThreeDotsSvg";
import PlusSvg from "@/components/svgs/PlusSvg";

const CreateCourse = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="my-container pb-20"> 
      <div className="flex items-center justify-between pt-6 md:pt-8 lg:pt-12 pb-4 md:pb-5 lg:pb-8 mb-4">
        <div className="flex gap-4 items-center">
          <Link
            to="/"
            className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit"
          >
            <ArrowLeftSvg />
            <h2 className="section-title">Create Content</h2>
          </Link>
        </div>
        <div className="p-2 border border-white rounded-full cursor-pointer">
          <ThreeDotsSvg />
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[670px]  flex flex-col gap-5"
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
                    value="Course"
                    checked={field.value === "Course"}
                  />
                  <p className="text-sm font-medium text-light">Course</p>
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
          <label className="text-sm font-medium text-light">Title</label>
          <input
            {...register("title", { required: "Title is required" })}
            type="text"
            className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm w-full"
            placeholder="Enter course title"
          />
          {errors.title && (
            <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label className="text-sm font-medium text-light">Description</label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
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
      </form>

      
      <div className="flex flex-col items-start justify-end mt-5">
        <label className="text-sm font-medium text-light">Lessons</label>
        <Link
          to={"/my-classroom/create-course"}
          className="flex items-center gap-3"
        >
          <p className="text-sm leading-6 capitalize text-light tracking-[-0.14px] hover:text-secondary duration-300">
            Add lesson
          </p>
          <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border border-[#024040] bg-gradient-to-r from-black via-black to-[#024040] shadow-[0_0_0_1px_black]">
            <PlusSvg />
          </span>
        </Link>
      </div>

 
      <div className="fixed bottom-0 left-0 w-full  p-4 shadow-lg">
        <div className="flex items-center justify-between ">
          <input
            className="request-btn approve cursor-pointer px-6 py-3 bg-white text-black font-medium rounded-lg hover:opacity-80 duration-300"
            type="submit"
            value="Add"
          />

          <button className="request-btn text-light bg-gray-700 px-6 py-3 rounded-lg hover:opacity-80 duration-300">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
