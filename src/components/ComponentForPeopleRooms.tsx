import React from "react";
import { useFilterStore } from "../store/filterStore";

const roomsOptions = [1, 2, 3, 4, 5, 6, "6+"] as const;

function PeopleRooms() {
  const { roomsCount, setRoomsCount } = useFilterStore();

  return (
    <div className="h-[270px] border-b border-b-[1px] border-b-[rgb(233,231,231)]">
      <h4 className="ml-[30px] mt-1 text-[20px] text-black">Սենյակների քանակ</h4>
      <div className="flex flex-wrap mt-[15px]">
        {/* 🔹 “Բոլորը” */}
        <p
          onClick={() => setRoomsCount(null)}
          className={`cursor-pointer m-[10px] text-center ml-[10px] w-[80px] h-[50px] p-[10px] rounded-[25px] border transition duration-200 ${
            roomsCount === null
              ? "bg-black text-white"
              : "border-[rgb(179,177,177)] text-[rgb(93,93,93)] bg-white hover:bg-[gainsboro]"
          }`}
        >
          Բոլորը
        </p>

        {/* 🔹 1–6 ու 6+ */}
        {roomsOptions.map((num) => (
          <p
            key={num}
            onClick={() => setRoomsCount(num === "6+" ? 7 : Number(num))}
            className={`cursor-pointer m-[10px] text-center ml-[10px] w-[80px] h-[50px] p-[10px] rounded-[25px] border transition duration-200 ${
              roomsCount === (num === "6+" ? 7 : num)
                ? "bg-black text-white"
                : "border-[rgb(179,177,177)] text-[rgb(93,93,93)] bg-white hover:bg-[gainsboro]"
            }`}
          >
            {num}
          </p>
        ))}
      </div>
    </div>
  );
}

export default PeopleRooms;
