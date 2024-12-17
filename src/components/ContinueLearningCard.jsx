import { FaCalendarAlt } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import img from "@/assets/images/img1.png";
import { RiCopyrightFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const ContinueLearningCard = ({ data }) => {
  const { type, title, lessons = 0, duration = "0 hrs", progress } = data;

  return (
   <Link to={'/course-details'}>
    <div className="relative rounded-2xl bg-[#242424] hover:shadow-[2px_2px_4px] hover:shadow-[#009696] duration-300 ease-in-out ">
      {/* Top Section with Badge and Icon */}
      <div className="absolute top-2 left-2 right-2 flex items-center justify-between px-4 z-10">
        {/* Badge */}
        <div className="flex py-1 px-2 justify-center items-center gap-1 rounded-lg border border-[#009696] bg-secondPrimary text-[#ccc] text-xs leading-[21px] tracking-[-0.12px]">
          <span className="w-[9px] h-[9px] rounded-full bg-[#009696]"></span>
          {type}
        </div>

        {/* Icon */}
        <RiCopyrightFill className="text-[#ccc] text-lg" />
      </div>

      {/* Image */}
      <img
        className="rounded-t-lg h-[150px] w-full"
        src={img}
        alt={title || "Course Thumbnail"}
      />

      {/* Content */}
      <div className="p-4">
        <h3 className="text-light text-xl font-semibold leading-[21px] tracking-[-0.2px] mb-6">
          {title}
        </h3>

        {/* Progress Bar */}
        <div className="flex items-center gap-2 mb-4">
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 relative">
            <div
              className="bg-[#009696] h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          {/* Progress Text */}
          <span className="text-xs text-[#ccc] truncate">{progress}% complete</span>
        </div>

        {/* Details Section */}
        <div className="flex items-center justify-between">
          <div className="flex justify-between items-center gap-2 w-full text-light bg-[#505050] rounded-full px-3 py-1 text-xs font-medium leading-[21px] tracking-[-0.12px]">
            {/* Left Section */}
            <div className="flex justify-center items-center gap-2 border-r border-[#ccc] pr-2">
              <span>
                <FaCalendarAlt />
              </span>
              <span>{lessons}</span> Lessons
            </div>

            {/* Right Section */}
            <div className="flex justify-center items-center gap-2 pl-2">
              <span>
                <IoTime />
              </span>
              <span>{duration}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
   
   </Link>
  );
};

export default ContinueLearningCard;
