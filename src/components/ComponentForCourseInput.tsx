import React from "react";
import "../index.css";

const CourseInputs: React.FC = () => {
  return (
    <div className="flex mt-[30px]">
      <input
        className="border border-[rgb(206,205,205)] border-[0.5px] w-[130px] ml-[7px] h-[25px] p-[5px] rounded-[15px]"
        type="number"
        placeholder="Սկսած"
      />
      <input
        className="border border-[rgb(206,205,205)] border-[0.5px] w-[130px] ml-[7px] h-[25px] p-[5px] rounded-[15px]"
        type="number"
        placeholder="Մինչև"
      />
    </div>
  );
};

export default CourseInputs;
