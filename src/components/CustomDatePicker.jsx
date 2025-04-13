import { cn } from '@/lib/utils';
import { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CustomDatePicker = ({ value, onChange, className }) => {
  const [open, setOpen] = useState(false);

  return (
    <ReactDatePicker
      selected={value}
      onChange={(date) => {
        onChange(date);
        setOpen(false);
      }}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      open={open}
      className={cn(
        'bg-inherit focus:outline-none py-3 w-full placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px]',
        className
      )}
      placeholderText="MM/DD/YYYY"
      dateFormat="MM/dd/yyyy"
    />
  );
};

export default CustomDatePicker;
