import React, { useState } from "react";

const CustomTimeRangePicker = () => {
  const [startTime, setStartTime] = useState({ hours: "00", minutes: "00" });
  const [endTime, setEndTime] = useState({ hours: "00", minutes: "00" });

  // Helper to generate hour and minute options
  const generateOptions = (limit) =>
    Array.from({ length: limit }, (_, i) => String(i).padStart(2, "0"));

  const hours = generateOptions(24);
  const minutes = generateOptions(60);

  return (
    <div className="flex flex-col gap-6">
      {/* Start Time Picker */}
      <div>
        <label className="text-sm font-medium mb-2 block">Start Time</label>
        <div className="flex gap-2">
          {/* Hours Dropdown */}
          <select
            value={startTime.hours}
            onChange={(e) =>
              setStartTime({ ...startTime, hours: e.target.value })
            }
            className="border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring focus:ring-indigo-500 focus:border-indigo-500"
          >
            {hours.map((hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </select>
          {/* Minutes Dropdown */}
          <select
            value={startTime.minutes}
            onChange={(e) =>
              setStartTime({ ...startTime, minutes: e.target.value })
            }
            className="border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring focus:ring-indigo-500 focus:border-indigo-500"
          >
            {minutes.map((minute) => (
              <option key={minute} value={minute}>
                {minute}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* End Time Picker */}
      <div>
        <label className="text-sm font-medium mb-2 block">End Time</label>
        <div className="flex gap-2">
          {/* Hours Dropdown */}
          <select
            value={endTime.hours}
            onChange={(e) =>
              setEndTime({ ...endTime, hours: e.target.value })
            }
            className="border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring focus:ring-indigo-500 focus:border-indigo-500"
          >
            {hours.map((hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </select>
          {/* Minutes Dropdown */}
          <select
            value={endTime.minutes}
            onChange={(e) =>
              setEndTime({ ...endTime, minutes: e.target.value })
            }
            className="border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring focus:ring-indigo-500 focus:border-indigo-500"
          >
            {minutes.map((minute) => (
              <option key={minute} value={minute}>
                {minute}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Display Selected Times */}
      <div className="mt-4">
        <h3 className="text-sm font-semibold">Selected Time Range</h3>
        <p className="text-gray-700">
          {startTime.hours}:{startTime.minutes} - {endTime.hours}:
          {endTime.minutes}
        </p>
      </div>
    </div>
  );
};

export default CustomTimeRangePicker;
