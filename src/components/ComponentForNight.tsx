import React from "react";
import { useFilterStore } from "../store/filterStore";

function Night(): JSX.Element {
  const { nightStay, setNightStay } = useFilterStore();

  return (
    <div className="border-b border-b-[rgb(233,231,231)] border-b-[1px]">
      <h4 className="ml-[20px] text-[rgb(46,46,46)] m-3.5">Գիշերակացի առկայություն</h4>
      <div className="flex">
        <p
          onClick={() => setNightStay("all")}
          className={`cursor-pointer ml-[15px] m-[10px] w-[80px] h-[40px] text-center p-1 rounded-[25px] ${
            nightStay === "all" ? "bg-black text-white" : "border border-black"
          }`}
        >
          Բոլորը
        </p>
        <p
          onClick={() => setNightStay("no")}
          className={`cursor-pointer w-[80px] m-[10px] h-[40px] text-center rounded-[45px] ${
            nightStay === "no" ? "bg-black text-white" : "border border-black"
          }`}
        >
          Ոչ
        </p>
        <p
          onClick={() => setNightStay("yes")}
          className={`cursor-pointer w-[80px] m-[10px] h-[40px] text-center rounded-[45px] ${
            nightStay === "yes" ? "bg-black text-white" : "border border-black"
          }`}
        >
          Այո
        </p>
      </div>
    </div>
  );
}

export default Night;
