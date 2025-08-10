import React from "react";

interface PeopleCountWithNightProps {
  countWithNight: number;
  onIncrement: () => void;
  onDecrement: () => void;
  delivery: boolean;
}

function PeopleCountWithNight({
  countWithNight,
  onIncrement,
  onDecrement,
  delivery,
}: PeopleCountWithNightProps): JSX.Element {
  return (
    <div className="border-b border-b-[rgb(233,231,231)] border-b-[1px]">
      <h4 className="ml-[30px] text-[rgb(46,46,46)] w-[250px]">
        Մարդկանց թույլատրելի քանակը գիշերակացով
        {delivery && <p>Առավելագույն քանակ</p>}
      </h4>
      <div className="flex mt-[35px] ml-[50px]">
        <button
          className="cursor-pointer w-[80px] h-[45px] text-[35px] rounded-[25px] border-0"
          onClick={onDecrement}
          aria-label="decrement"
        >
          -
        </button>
        <p className="text-xl p-[15px] -mt-[5px]">{countWithNight}</p>
        <button
          className="cursor-pointer w-[80px] h-[45px] text-[35px] rounded-[25px] border-0"
          onClick={onIncrement}
          aria-label="increment"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default PeopleCountWithNight;
