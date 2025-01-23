import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useState } from 'react';
import { useSearchSettings } from './context/app.ctx';
import { ELocation } from './types/constants';
import millify from 'millify';

export default function Price() {
  const { searchSettings, setSearchSettings } = useSearchSettings();
  const [isOpen, setIsOpen] = useState(false);

  //   const handleSelect = (value: ELocation) => {
  //     console.log(searchSettings, value);
  //     setSearchSettings((e) => ({ ...e, location: value }));
  //     setIsOpen(!isOpen);
  //     return;
  //   };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name;
    const input = e.target.value.replace(/[a-zA-Z]|\s|[,]/gm, '');

    setSearchSettings((e) => ({ ...e, [key]: input }));
  };

  return (
    <div className="border-r-2 flex w-full gap-3 border-r-[#f0f0f0] relative">
      <div className="">
        <p className="font-semibold text-secondary">Price</p>
        <p className="font-bold text-black w-full">
          {millify(searchSettings.minPrice)} AED -{' '}
          {millify(searchSettings.maxPrice)} AED
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
        <>
          <div
            className="dropDownTypes absolute w-[360px] bg-white z-10 top-[50px] px-6 pt-6 pb-2.5"
            style={{
              boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
            }}
          >
            <div className='flex flex-row justify-between relative flex-wrap'>
            <input
              className="py-3 px-2.5 h-[28px] relative w-1/3 border"
              value={searchSettings.minPrice}
              name="minPrice"
              onChange={handleChange}
            />
            
            <p className='font-bold'>-</p>
            <input
              className="py-3 px-2.5 h-[28px] relative w-1/3 border"
              value={searchSettings.maxPrice}
              name="maxPrice"
              onChange={handleChange}
            />
          </div>
          </div>
        </>
      )}
    </div>
  );
}
