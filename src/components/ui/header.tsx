import React, { useState } from 'react';
import logo from '@/assets/logo.svg';
import { NavLink } from 'react-router';
import { FaHeart } from 'react-icons/fa';
import { RiArrowGoBackFill } from 'react-icons/ri';

const headerStyle: React.CSSProperties = {
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, .02), 0 0 0 1px rgba(27, 31, 35, .15)',
};

export default function Header() {
  const [isFavPage, setIsFavPage] = useState(false);

  return (
    <header
      className="w-100 h-[72px] bg-white px-4 sm:px-10 flex align-middle justify-between "
      style={headerStyle}
    >
      <div className="flex h-100 align-middle justify-center w-max">
        <img src={logo} alt="logo" width={42} height={42} />
        <p className="text-2xl font-bold self-center hidden sm:block">
          Estatery
        </p>
      </div>

      <p className="font-bold self-center hover:text-primary cursor-default text-2xl sm:text-3xl">
        Properties For Rent
      </p>

      <div className="h-100 flex">
        {isFavPage ? (
          <NavLink to="/" className="self-center">
            <button
              onClick={() => setIsFavPage(false)}
              className="border border-primary h-100 p-3 bg-[#e8e7f7]"
            >
              <RiArrowGoBackFill
                style={{ width: '24px', height: '24px' }}
                color="#7268ed"
              />
            </button>
          </NavLink>
        ) : (
          <NavLink to="/favorites" className="self-center">
            <button
              onClick={() => setIsFavPage(true)}
              className="border border-white h-100 p-3 rounded-full hover:border-primary"
            >
              <FaHeart
                style={{ width: '24px', height: '24px' }}
                color="#7268ed"
              />
            </button>
          </NavLink>
        )}
      </div>
    </header>
  );
}
