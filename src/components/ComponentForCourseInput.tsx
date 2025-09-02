import React from "react";
import { useFilterStore } from "../store/filterStore";
import "../index.css";

const CourseInputs: React.FC = () => {
  const { minPrice, maxPrice, setMinPrice, setMaxPrice } = useFilterStore();

  return (
    <div className="flex mt-[30px] gap-3">
      <input
        className="border border-gray-300 w-[160px] h-[40px] px-4 rounded-md text-[15px] focus:outline-none focus:ring-2 focus:ring-black"
        type="number"
        placeholder="Սկսած"
        value={minPrice ?? ""}
        onChange={(e) => {
          const value = e.target.value;
          setMinPrice(value ? parseInt(value) : null);
        }}
      />
      <input
        className="border border-gray-300 w-[160px] h-[40px] px-4 rounded-md text-[15px] focus:outline-none focus:ring-2 focus:ring-black"
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
