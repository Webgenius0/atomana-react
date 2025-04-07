import { useEffect, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import ClockSvg from './svgs/ClockSvg';

const TimeRangePicker = ({ startTime, endTime }) => {
  const { register, watch } = useFormContext();

  const startTimeValue = watch(startTime);
  const endTimeValue = watch(startTime);

  const [showPicker, setShowPicker] = useState(false);
  const pickerRef = useRef(null);

  const togglePicker = () => setShowPicker((prev) => !prev);

  // Handle outside click to close the picker
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setShowPicker(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Confirm selection and close the picker
  const handleConfirm = () => {
    setShowPicker(false);
  };

  return (
    <div className="relative w-full">
      {/* Label */}
      <div
        className="flex items-center justify-between px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark w-full gap-2.5 cursor-pointer"
        onClick={togglePicker}
      >
        {startTimeValue && endTimeValue ? (
          <span className="text-light text-sm leading-[21px] tracking-[-0.14px] ">
            {startTimeValue} - {endTimeValue}
          </span>
        ) : (
          <span className="text-secondary text-sm leading-[21px] tracking-[-0.14px]">
            Select time range
          </span>
        )}
        <ClockSvg />
      </div>

      {/* Time Picker */}
      {showPicker && (
        <div
          ref={pickerRef}
          className="absolute top-[110%] left-0 z-50 w-full bg-[#1e1e1e] p-4 rounded-xl shadow-lg border border-[#d8dfeb]"
        >
          <div className="flex flex-col gap-4">
            {/* Start Time */}
            <div className="flex flex-col">
              <label className="text-sm text-white mb-2">Start Time</label>
              <input
                type="time"
                className="px-3 py-2 rounded border border-[#d8dfeb] bg-[#333] text-light text-sm"
                {...register(startTime)}
              />
            </div>

            {/* End Time */}
            <div className="flex flex-col">
              <label className="text-sm text-white mb-2">End Time</label>
              <input
                type="time"
                className="px-3 py-2 rounded border border-[#d8dfeb] bg-[#333] text-light text-sm"
                {...register(endTime)}
              />
            </div>

            {/* Validation Message */}
            {startTimeValue &&
              endTimeValue &&
              startTimeValue >= endTimeValue && (
                <p className="text-xs text-red-500">
                  Start time must be earlier than end time.
                </p>
              )}

            {/* Confirm Button */}
            <button
              className="w-full text-sm px-4 py-2 mt-1 text-light bg-gradient-to-r from-[#242424]  rounded to-[#009696]"
              onClick={handleConfirm}
              disabled={
                startTimeValue >= endTimeValue ||
                !startTimeValue ||
                !endTimeValue
              }
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeRangePicker;
