import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useState } from 'react';
import { useSearchSettings } from '../context/app.ctx';
import { ELocation } from '../types/constants';
import DropdownBox from './ui/dropdown-box';

export default function Location() {
  const { searchSettings, setSearchSettings } = useSearchSettings();
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: ELocation) => {
    console.log(searchSettings, value);
    setSearchSettings((e) => ({ ...e, location: value }));
    setIsOpen(!isOpen);
    return;
  };

  return (
    <div className="border-r-2 flex w-full gap-3 border-r-[#f0f0f0] relative">
      <div>
        <p className="font-semibold text-secondary">Location</p>
        <p className="font-bold text-black w-full">{searchSettings.location}</p>
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
          {Object.entries(ELocation).map(([key, optionValue]) => {
            const locationName = optionValue.replace(/_/g, ' ');
            return (
              <div
                key={key}
                onClick={() => handleSelect(optionValue)}
                className="dropDownListItems py-[10px] px-[5px] font-medium cursor-pointer hover:bg-primary hover:text-white focus:bg-[#e8e7e7] focus:text-primary"
                style={{ borderBottom: '2px solid #f0f0f0' }}
              >
                {locationName.charAt(0).toUpperCase() +
                  locationName.slice(1).toLowerCase()}
              </div>
            );
          })}
        </DropdownBox>
      )}
    </div>
  );
}
