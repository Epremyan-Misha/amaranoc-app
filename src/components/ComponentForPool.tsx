import React from "react";
import { useFilterStore } from "../store/filterStore";

const poolOptions = ["Բոլորը", "Բաց", "Փակ", "Տաքացվող", "Առանց լողավազան"] as const;

function Pool() {
  const { poolType, setPoolType } = useFilterStore();

  return (
    <div className=" h-[260px]">
      <h4 className="ml-[30px] not-odd: text-[20px] mt-3  text-black">Լողավազան</h4>

      <div className="flex flex-wrap mt-[15px]">
        {poolOptions.map((option) => (
          <p
            key={option}
            onClick={() => setPoolType(option === "Բոլորը" ? "" : option)} 
            className={`cursor-pointer m-[10px] text-center ml-[10px] w-fit min-w-[90px] h-[60px] px-[15px] flex items-center justify-center rounded-[25px] border transition duration-200 ${
              poolType === (option === "Բոլորը" ? "" : option)
                ? "bg-black text-white"
                : "border-[rgb(179,177,177)] text-[rgb(93,53,53)] bg-white hover:bg-[gainsboro]"
            }`}
          >
            {option}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Pool;
