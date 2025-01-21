// import React from 'react';

// export default function Dropdown({ children }: { children: React.ReactNode }) {
//   return (
//     <div
//       className="absolute w-10 ml-1 bg-white z-10"
//       style={{
//         boxShadow:
//           'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
//       }}
//     >
//       <p className="py-2.5 px-1.5 border-b-[#f0f0f0]">{children}</p>
//     </div>
//   );
// }

import { Dispatch, SetStateAction,  } from 'react';

interface DropdownProps<T> {
  options: T;
  value: T[keyof T];
  onChange: (value: T[keyof T]) => void;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Dropdown = <T extends Record<string, string>>({
  options,
  value,
  onChange,
  isOpen,
  setIsOpen,
}: DropdownProps<T>) => {
  // const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (selectedValue: string) => {
    onChange(selectedValue as T[keyof T]);
    setIsOpen(false);
  };

  console.log(options);

  return (
    <div className="relative w-64">
      {/* Dropdown Header */}
      {/* <div
        className="flex justify-between items-center p-3 border border-gray-300 rounded-md cursor-pointer"
        onClick={toggleDropdown}
      >
        <span className="text-sm font-medium">{value}</span>
        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ⌄
        </span>
      </div> */}

      {/* Dropdown Options */}
      {/* {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          {Object.keys(options).map(([key, optionValue]) => (
            <div
              key={`${key}-${optionValue}`}
              onClick={() => handleSelect(optionValue)}
              className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer hover:bg-primary hover:text-white"
            >
              {optionValue}
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default Dropdown;
