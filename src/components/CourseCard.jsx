import { FaCalendarAlt } from "react-icons/fa";
import { IoTime } from "react-icons/io5";

const CourseCard = ({ data }) => {
  const { type, title, status, lastActivity, lessons = 0, duration = "0 hrs" } = data;

  return (
    <div className="rounded-2xl bg-[#242424] py-4 px-6 hover:shadow-[2px_2px_4px] hover:shadow-[#009696] duration-300 ease-in-out">
      <img
        className="rounded-t-lg"
        src="/docs/images/blog/image-1.jpg"
        alt={title || "Course Thumbnail"}
      />
      <div className="flex items-center justify-between mb-4">
        <div className="flex py-1 px-2 justify-center items-center gap-1 rounded-lg border border-[#009696] bg-secondPrimary text-[#ccc] text-xs leading-[21px] tracking-[-0.12px]">
          <span className="w-[9px] h-[9px] rounded-full bg-[#009696]"></span>
          {type}
        </div>
      </div>
      <div>
        <h3 className="text-light text-xl font-semibold leading-[21px] tracking-[-0.2px] mb-6">
          {title}
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex justify-between items-center gap-2 w-full text-light bg-[#505050] rounded-full px-3 py-1 text-xs font-medium leading-[21px] tracking-[-0.12px]">
            <div className="flex justify-center items-center gap-2 border-r-2 pr-2">
              <span>
                <FaCalendarAlt />
              </span>
              <span>{lessons}</span> Lessons
            </div>
            <div className="flex justify-center items-center gap-2">
              <span>
                <IoTime />
              </span>
              <span>{duration}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
