import { FaCalendarAlt } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import img from "@/assets/images/img1.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import CopySvg from "./svgs/CopySvg";

const ContinueLearningCard = ({ data }) => {
  const { id, type, title, lessons = 0, duration = "0 hrs", progress, image } = data;
  const location = useLocation();
  const navigate = useNavigate();

  const handleCardClick = (type) =>{
    if (type == "Blog"){
      navigate(`/my-classroom/blog/${id}`,{
        state: {from: location.pathname},
      });
    }
    else if (type == "Video"){
      navigate(`/my-classroom/video/${id}`,{
        state: {from: location.pathname},
      });
    }
  }
  
  return (
    // <Link to={`/my-classroom/course-details/${id}`}>
    // <Link  to={type == "Video" ? `/my-classroom/video/${id}` : `/my-classroom/blog/${id}`}> </Link>
      <div
      onClick={()=> handleCardClick(type)}
      role={
        type == "Blog" ||
        type == "Video"
        ? "button"
        : "presentation"
      }
      className="relative rounded-2xl bg-[#242424] hover:shadow-[2px_2px_4px] hover:shadow-[#009696] duration-300 ease-in-out overflow-hidden">
      
        <div className="absolute top-2 left-2 right-2 flex items-center justify-between px-4 z-10">
    
          <div className="flex py-1 px-2 justify-center items-center gap-1 rounded-lg border border-[#009696] bg-secondPrimary text-[#ccc] text-xs leading-[21px] tracking-[-0.12px]">
            <span className="w-[9px] h-[9px] rounded-full bg-[#009696]"></span>
            {type}
          </div>

     
          <button className="w-8 h-8 rounded-full flex items-center justify-center  bg-[#242424] bg-opacity-45 ">
            <CopySvg />
          </button>
        </div>

     
        <img
          className="rounded-t-lg h-[150px] w-full"
          src={image}
          alt={title || "Course Thumbnail"}
        />

    
        <div className="p-4 bg-gradient-to-r from-[#242424] to-primary">
          <h3 className="text-light text-xl font-semibold leading-[21px] tracking-[-0.2px] mb-6">
            {title}
          </h3>

      
          <div className="flex items-center gap-3 mb-4">
            {/* Progress Bar Container */}
            <div className="flex items-center flex-1">
              <ProgressBar currentValue={12} goalValue={40} />
            </div>

            <span className="text-xs text-[#ccc] whitespace-nowrap flex items-center mt-3">
              {progress}% complete
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 w-full text-light bg-[#505050] rounded-full px-3 py-1 text-xs font-medium leading-[21px] tracking-[-0.12px]">
              {/* Left Section */}
              <div className="flex justify-center items-center gap-2 border-r border-[#ccc] pr-2 w-1/2 ">
                <span>
                  <FaCalendarAlt />
                </span>
                <span>{lessons}</span> Lessons
              </div>

              {/* Right Section */}
              <div className="flex justify-center items-center gap-2 pl-2 w-1/2 ">
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

export default ContinueLearningCard;
