const ProgressBar = ({ currentValue, goalValue }) => {
  const progress = Math.min((currentValue / goalValue) * 100, 100);
  return (
    <div>
      <div className="p-5">
        <div className="flex justify-between">
          <div className="mb-1 text-base font-medium dark:text-white">
            {name}
          </div>
          <div className="mb-1 text-base font-medium dark:text-white">
            {sales}
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
