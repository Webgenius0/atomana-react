import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = ({value, onChange}) => {
  // const [startDate, setStartDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
  //   <ReactDatePicker
  //   selected={startDate}
  //   onChange={(date) => setStartDate(date)}
  //   className="bg-inherit focus:outline-none py-3 w-full placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px]"
  //   placeholderText="DD/MM/YYYY"
  //   dateFormat="dd/MM/yyyy"
  // />

  <ReactDatePicker
      selected={value}
      onChange={(date, e) => {
        onChange(date);
        setOpen(false); // Close calendar after selecting a date
      }}
      onFocus={() => setOpen(true)} // Open when focusing on the input
      open={open} // Control calendar state
      className="bg-inherit focus:outline-none py-3 w-full placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px]"
      placeholderText="DD/MM/YYYY"
      dateFormat="dd/MM/yyyy"
    />
  );
};

export default CustomDatePicker;
