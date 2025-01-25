import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function DropdownBox({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        'absolute w-[160px] bg-white z-10 top-[50px]',
        className
      )}
      style={{
        boxShadow:
          'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
      }}
    >
      {children}
    </div>
  );
}
