import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../index.css";
import HeaderInfo from "../components/ComponentForHeaderInfo";
import { Logo, SearchInput } from "../components/ComponentForHead";

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

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`bg-white fixed top-0 left-0 z-50 w-full transition-transform duration-300 shadow-md px-8 py-4 h-20 flex items-center justify-between ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Logo />
      <nav className="flex items-center gap-10">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-lg font-medium border-b-2 border-orange-500 pb-1"
              : "text-lg font-medium hover:text-orange-500 transition-colors"
          }
        >
          Գլխավոր
        </NavLink>

        <HeaderInfo />
      </nav>
      <SearchInput value={searchValue} onChange={onSearchChange} />
    </header>
  );
}

export default Head;
