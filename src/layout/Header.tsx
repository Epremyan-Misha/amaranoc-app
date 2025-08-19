// layout/Header.tsx

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import '../index.css';
import HeaderInfo from "../components/ComponentForHeaderInfo";
import { Logo, SearchInput } from '../components/ComponentForHead';

interface HeadProps {
  searchValue: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Head({ searchValue, onSearchChange }: HeadProps): JSX.Element {
  return (
    <div className="bg-white fixed top-0 left-0 z-50 w-full transition-transform duration-300 flex gap-20 shadow-md px-6 py-4">
      <Logo />
      <NavLink 
        to="/" 
        className={({ isActive }) =>
          isActive 
          ? "text-1xl mt-2 border-b-2 border-b-orange-500 h-7.5 cursor-pointer"
          : "text-1xl mt-2 h-7.5 cursor-pointer"
        }
      >
        Գլխավոր
      </NavLink>
      <HeaderInfo />
      <SearchInput value={searchValue} onChange={onSearchChange} />
    </div>
  );
}

export default Head;
