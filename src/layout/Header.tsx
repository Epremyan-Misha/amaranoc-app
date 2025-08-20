import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; 
import '../index.css';
import HeaderInfo from "../components/ComponentForHeaderInfo";
import { Logo, SearchInput } from '../components/ComponentForHead';

interface HeadProps {
  searchValue: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Head({ searchValue, onSearchChange }: HeadProps): JSX.Element {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`bg-white fixed top-0 left-0 z-50 w-full transition-transform duration-300 flex gap-20 shadow-md px-6 py-4 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <Logo />
      <NavLink 
        to="/" 
        className={({ isActive }) =>
          isActive 
          ? "text-1xl mt-8 border-b-2 border-b-orange-500 h-7.5 cursor-pointer"
          : "text-1xl mt-8 h-7.5 cursor-pointer"
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
