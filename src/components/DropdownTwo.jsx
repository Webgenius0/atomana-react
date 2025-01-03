import { useState, useEffect } from "react";
import { FaCaretDown } from "react-icons/fa"; // Import the down arrow icon from react-icons

const DropdownTwo = ({ options, placeholder, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  // Set the first option as the default selection if none is selected
  useEffect(() => {
    if (!selectedOption && options.length > 0) {
      setSelectedOption(options[0]);
      onSelect(options[0]);
    }
  }, [options, selectedOption, onSelect]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="relative w-fit bg-dark">
      {/* DropdownTwo button with selected option */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-3 py-2 text-left text-xs text-white truncate bg-transparent border rounded-[10px] shadow-sm focus:outline-none flex items-center justify-between"
      >
        {/* Display selected option or placeholder */}
        <span>
          {selectedOption
            ? selectedOption.label
            : placeholder || "Select an option"}
        </span>
        {/* Down Arrow */}
        <FaCaretDown className="ml-2 text-white" />
      </button>

      {/* Options DropdownTwo list */}
      {isOpen && (
        <ul className="absolute z-10 w-full mt-2 bg-[#242424] border rounded-md shadow-lg">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className="px-4 py-2 cursor-pointer text-xs text-white truncate hover:bg-[#009696] hover:text-white"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownTwo;
