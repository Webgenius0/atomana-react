import { FaCalendarAlt } from "react-icons/fa";
import personimg from "../../src/assets/images/user.png"
const EssentialCard = ({ data }) => {
  const { type, title, status, lastActivity } = data;

  return (
    <div className="rounded-2xl bg-[#242424] py-4 px-6 hover:shadow-[2px_2px_4px] hover:shadow-[#009696] duration-300 ease-in-out">
      <div className="flex items-center justify-between mb-4">
        <div className="flex py-1 px-2 justify-center items-center gap-1 rounded-lg border border-[#009696] bg-secondPrimary text-[#ccc] text-xs leading-[21px] tracking-[-0.12px]">
          <span className="w-[9px] h-[9px] rounded-full bg-[#009696]"></span>
          {type}
        </div>
        <button className=" flex w-[30px] h-[30px] justify-center items-center gap-1 rounded-full border border-[#4d4d4d] bg-[#242424] shadow-[0px_0px_0px_1px] shadow-[#000] cursor-pointer duration-300 active:scale-95">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clipPath="url(#clip0_1215_15206)">
              <path
                d="M5.00004 8.33333C4.08337 8.33333 3.33337 9.08333 3.33337 10C3.33337 10.9167 4.08337 11.6667 5.00004 11.6667C5.91671 11.6667 6.66671 10.9167 6.66671 10C6.66671 9.08333 5.91671 8.33333 5.00004 8.33333ZM15 8.33333C14.0834 8.33333 13.3334 9.08333 13.3334 10C13.3334 10.9167 14.0834 11.6667 15 11.6667C15.9167 11.6667 16.6667 10.9167 16.6667 10C16.6667 9.08333 15.9167 8.33333 15 8.33333ZM10 8.33333C9.08337 8.33333 8.33337 9.08333 8.33337 10C8.33337 10.9167 9.08337 11.6667 10 11.6667C10.9167 11.6667 11.6667 10.9167 11.6667 10C11.6667 9.08333 10.9167 8.33333 10 8.33333Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1215_15206">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      <div>
        <h3 className="text-light text-xl font-semibold leading-[21px] tracking-[-0.2px] mb-6">
          {title}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-secondary text-xs font-medium leading-[21px] tracking-[-0.12px]">
            Status: <span className="text-light">{status}</span>
          </p>
          <p className="text-secondary text-xs font-medium leading-[21px] tracking-[-0.12px]">
            Last Activity: <span className="text-light">{lastActivity}</span>
          </p>
        </div>
        <div className="flex items-center justify-between mt-20">
          <div className="flex items-center gap-4">
            <img
              className="w-8 h-8 rounded-full"
              src={personimg}
              alt=""
            />
            <div className="font-medium dark:text-white">
              <div className="text-xs text-light ">John Hernandez </div>
            </div>
          </div>

          <p className="flex justify-center items-center gap-2  text-light bg-[#505050] rounded-full px-3 py-1 text-xs font-medium leading-[21px] tracking-[-0.12px]">
            <span>
              <FaCalendarAlt />
            </span>
            2024 Q1
          </p>
        </div>
      </div>
    </div>
  );
};

export default EssentialCard;
