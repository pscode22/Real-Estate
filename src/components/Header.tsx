import React from 'react';
import logo from '@/assets/logo.svg';

const headerStyle: React.CSSProperties = {
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, .02), 0 0 0 1px rgba(27, 31, 35, .15)',
};

export default function Header() {
  return (
    <header
      className="w-100 h-[72px] bg-white px-10 flex align-middle justify-between "
      style={headerStyle}
    >
      <div className="flex h-100 align-middle justify-center w-max">
        <img src={logo} alt="logo" width={42} height={42} />
        <p className="text-2xl font-bold self-center">Estatery</p>
      </div>

      <p className="font-bold self-center hover:text-primary cursor-default text-3xl">
        Properties For Rent
      </p>
    </header>
  );
}
