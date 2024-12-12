import  { useState } from "react";

const Dropdown = ({ options, placeholder, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option); // Pass  selected option to the parent component
  };

  return (
    <div className="relative ">
      {/* heads */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-3 py-1 text-left text-xs text-white truncate bg-transparent border rounded-md shadow-sm focus:outline-none "
      >
        {selectedOption
          ? selectedOption.label
          : placeholder || "Select an option"}
      </button>

      {/*  Options */}
      {isOpen && (
        <ul className="absolute z-10 w-full mt-2 bg-transparent border rounded-md shadow-lg">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className="px-4 py-2 cursor-pointer text-xs text-white truncate hover:bg-blue-500 hover:text-white"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
