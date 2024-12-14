import React from "react";
import { useNavigate } from "react-router-dom";
import ThreeDotsSvg from "./svgs/ThreeDotsSvg";

const DataCard = ({ data, children }) => {
  const { type, title } = data;
  const navigate = useNavigate();

  const handleCardClick = (title) => {
    if (title === "Our Mission") {
      navigate(`/my-systems/team/our-mission`);
    } else if (title === "Open House Request Form") {
      navigate(`/my-systems/open-house/open-house-form`);
    }
  };

  return (
    <div
      onClick={() => handleCardClick(title)}
      role={
        title == "Our Mission" || title == "Open House Request Form"
          ? "button"
          : "presentation"
      }
      className="rounded-2xl bg-[#242424] py-4 px-6 hover:shadow-[2px_2px_4px] hover:shadow-[#009696] duration-300 ease-in-out"
    >
      {/* card header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex py-1 px-2 justify-center items-center gap-1 rounded-lg border border-[#009696] bg-secondPrimary text-[#ccc] text-xs leading-[21px] tracking-[-0.12px]">
          <span className="w-[9px] h-[9px] rounded-full bg-[#009696]"></span>
          {type}
        </div>
        <button className=" flex w-[30px] h-[30px] justify-center items-center gap-1 rounded-full border border-[#4d4d4d] bg-[#242424] shadow-[0px_0px_0px_1px] shadow-[#000] cursor-pointer duration-300 active:scale-95">
          <ThreeDotsSvg />
        </button>
      </div>

      {/* card-title */}
      <h3 className="text-light text-xl font-semibold leading-[21px] tracking-[-0.2px]">
        {title}
      </h3>
      {children}
    </div>
  );
};

export default DataCard;
