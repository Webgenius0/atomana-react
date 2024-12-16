const ProgressBar = ({ currentValue, goalValue }) => {
  const progress = Math.min((currentValue / goalValue) * 100, 100);

  return (
    <div className="w-full h-1 bg-gray-600 rounded-full mt-3.5">
      <div
        className={`h-full bg-gradient-to-r from-[#024040] to-[#009696] rounded-full`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
