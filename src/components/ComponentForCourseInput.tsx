import React from "react";
import { useFilterStore } from "../store/filterStore";
import "../index.css";

const CourseInputs: React.FC = () => {
  const { minPrice, maxPrice, setMinPrice, setMaxPrice } = useFilterStore();

  return (
    <div className="flex mt-[30px]">
      <input
        className="border border-[rgb(206,205,205)] border-[0.5px] w-[130px] ml-[7px] h-[25px] p-[5px] rounded-[15px]"
        type="number"
        placeholder="Սկսած"
        value={minPrice ?? ""}
        onChange={(e) => {
          const value = e.target.value;
          setMinPrice(value ? parseInt(value) : null);
        }}
      />
      <input
        className="border border-[rgb(206,205,205)] border-[0.5px] w-[130px] ml-[7px] h-[25px] p-[5px] rounded-[15px]"
        type="number"
        placeholder="Մինչև"
        value={maxPrice ?? ""}
        onChange={(e) => {
          const value = e.target.value;
          setMaxPrice(value ? parseInt(value) : null);
        }}
      />
    </div>
  );
};

export default CourseInputs;
