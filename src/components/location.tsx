import { FaAngleDown } from 'react-icons/fa';
import React from 'react';

export default function Location() {
  return (
    <div className="border-r-2 flex w-full border-r-[#f0f0f0]">
      <div className="">
        <p className="font-semibold text-secondary">Location</p>
        <p className="font-bold text-black">Dubai</p>
      </div>

      <button
        className="border-none bg-[#e8e7f7] p-1 w-max h-max text-primary self-end mb-1"
        style={{ borderRadius: '50%' }}
      >
        <FaAngleDown size={12} />
      </button>
    </div>

    

    // <div className='w-max'>
    //   Location
    // </div>
  );
}
