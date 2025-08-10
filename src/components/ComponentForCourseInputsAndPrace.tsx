import React from "react";
import Course from "./ComponentForCourseBody";
import CourseInputs from "./ComponentForCourseInput";
import "../index.css";

const CourseInputsAndPrace: React.FC = () => {
  return (
    <div className="border-b border-b-[rgb(233,231,231)] border-b-[1px] h-[145px]">
      <Course />
      <CourseInputs />
    </div>
  );
};

export default CourseInputsAndPrace;
