import PropTypes from "prop-types";

const ProgressBar = ({ progress }) => {
  return (
    <div >
      <div className="p-5 ">
        <div className="flex justify-between">
          <div className="mb-1 text-base font-medium dark:text-white">
            James L.
          </div>
          <div className="mb-1 text-base font-medium dark:text-white">
            $264,054 (12 sales)
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
          <div
            className="bg-[#009696] h-2.5 rounded-full"
            style={{ width: `${progress}%` }} 
          ></div>
        </div>
      </div>
    </div>
  );
};



export default ProgressBar;
