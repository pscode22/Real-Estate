import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useState } from 'react';
import { useSearchSettings } from '../context/app.ctx';
import { ELocation, EPropertyType } from '../types/constants';
import DropdownBox from './ui/dropdown-box';

export default function PropertyType() {
  const { searchSettings, setSearchSettings } = useSearchSettings();
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: EPropertyType) => {
    console.log(searchSettings, value);
    setSearchSettings((e) => ({ ...e, propertyType: value }));
    setIsOpen(!isOpen);
    return;
  };

  const convertToTitleCase = (input: string): string => {
    return input
      .toLowerCase() // Convert the entire string to lowercase
      .replace(/_/g, ' ') // Replace underscores with spaces
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize the first letter of each word
  };

  return (
    <div className="flex w-full gap-3 relative">
      <div>
        <p className="font-semibold text-secondary">Property Type</p>
        <p className="font-bold text-black w-full">
          {searchSettings.propertyType}
        </p>
      </div>

      <button
        className="border-none bg-[#e8e7f7] p-1 w-max h-max text-primary self-end mb-1"
        style={{ borderRadius: '50%' }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaAngleUp size={11} /> : <FaAngleDown size={11} />}
      </button>

      {isOpen && (
        <DropdownBox>
          {Object.entries(EPropertyType).map(([key, optionValue]) => {
            const propertyType = optionValue.replace(/_/g, ' ');
            return (
              <div
                key={key}
                onClick={() => handleSelect(optionValue)}
                className="py-[10px] px-[5px] font-medium cursor-pointer hover:bg-primary hover:text-white focus:bg-[#e8e7e7] focus:text-primary"
                style={{ borderBottom: '2px solid #f0f0f0' }}
              >
                {convertToTitleCase(propertyType)}
              </div>
            );
          })}
        </DropdownBox>
      )}
    </div>
  );
}
