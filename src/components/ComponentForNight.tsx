import React from "react";
import "../index.css";

function Night(): JSX.Element {
  return (
    <>
      <div className="border-b border-b-[rgb(233,231,231)] border-b-[1px]">
        <h4 className="ml-[20px] text-[rgb(46,46,46)] m-3.5">Գիշերակացի առկայություն</h4>
        <div className="flex">
          <div>
            <p className="cursor-pointer ml-[15px] w-[80px] h-[40px] border-0 text-white bg-black text-center p-1 rounded-[25px]">
              Բոլորը
            </p>
            <p className="cursor-pointer w-[80px] m-[10px] h-[40px] border border-black rounded-[45px] text-center ml-[10px] transition duration-1000 hover:bg-[gainsboro]">
              Ոչ
            </p>
          </div>
          <div>
            <p className="cursor-pointer w-[80px] m-[1px] h-[40px] border border-black rounded-[45px] text-center ml-[10px] transition duration-1000 hover:bg-[gainsboro]">
              Այո
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Night;
