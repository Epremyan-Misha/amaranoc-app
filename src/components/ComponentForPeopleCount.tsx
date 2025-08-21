import React from "react";
import { useFilterStore } from "../store/filterStore";

function PeopleCount(): JSX.Element {
  const { peopleCount, setPeopleCount } = useFilterStore();

  return (
    <div className="border-b border-b-[rgb(233,231,231)] border-b-[1px]">
      <h4 className="ml-[20px] mt-[15px] text-[rgb(46,46,46)]">
        Մարդկանց թույլատրելի քանակ
      </h4>
      <div className="flex mt-[15px] p-[15px] ml-[40px]">
        <button
          className="cursor-pointer w-[80px] h-[45px] text-[35px] rounded-[25px] border-0"
          onClick={() => setPeopleCount(Math.max(0, peopleCount - 1))}
          aria-label="decrement"
        >
          -
        </button>
        <p className="text-xl p-[15px] -mt-[5px]">{peopleCount}</p>
        <button
          className="cursor-pointer w-[80px] h-[45px] text-[35px] rounded-[25px] border-0"
          onClick={() => setPeopleCount(peopleCount + 1)}
          aria-label="increment"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default PeopleCount;
