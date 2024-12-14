import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <ReactDatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      className="bg-inherit focus:outline-none py-3 w-full placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px]"
      placeholderText="DD/MM/YYYY"
      dateFormat="dd/MM/yyyy"
    />
  );
};

export default CustomDatePicker;
