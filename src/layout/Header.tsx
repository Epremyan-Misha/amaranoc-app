import React from 'react';
import '../index.css';
import HeaderInfo from "../components/ComponentForHeaderInfo";
import { Logo, SearchInput } from '../components/ComponentForHead';

function Head(): JSX.Element {
  return (
    <div className="bg-white fixed flex gap-20 -mt-36 w-[105%]">
      <Logo />
      <h4 className="text-1xl mt-8 border-b-2 border-b-orange-500 h-7.5 cursor-pointer">
        Գլխավոր
      </h4>
      <HeaderInfo />
      <SearchInput />
    </div>
  );
}

export default Head;
