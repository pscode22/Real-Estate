import React from 'react';

export default function Dropdown({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="absolute w-10 ml-1 bg-white z-10"
      style={{
        boxShadow:
          'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
      }}
    >
      <p className="py-2.5 px-1.5 border-b-[#f0f0f0]">{children}</p>
    </div>
  );
}
