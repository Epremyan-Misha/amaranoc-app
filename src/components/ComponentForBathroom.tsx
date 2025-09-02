import React from "react";
import { useFilterStore } from "../store/filterStore";

const bathroomOptions = [1, 2, "3+"] as const;

function BathRoom() {
  const { bathroomsCount, setBathroomsCount } = useFilterStore();

  return (
    <div className="border-b border-b-[1px] border-b-[rgb(233,231,231)] h-[210px]">
      <h4 className="ml-[30px] text-[20px]  text-black">Սանհանգույցների քանակ</h4>

      <div className="flex flex-wrap mt-[20px]">
        {bathroomOptions.map((num) => (
          <p
            key={num}
            onClick={() => setBathroomsCount(num === "3+" ? 3 : Number(num))}
            className={`cursor-pointer m-[10px] text-center ml-[10px] w-[90px] h-[60px] p-[15px] rounded-[25px] border transition duration-200 ${
              bathroomsCount === (num === "3+" ? 3 : num)
                ? "bg-black text-white"
                : "border-[rgb(179,177,177)] text-[rgb(93,53,53)] bg-white hover:bg-[gainsboro]"
            }`}
          >
            {num}
          </p>
        ))}
      </div>
    </div>
  );
}

export default BathRoom;
