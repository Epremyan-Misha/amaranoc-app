import React from "react";
import "../index.css";
import BodyInfo from "../components/ComponentForBodyInfo";
import PeopleCount from "../components/ComponentForPeopleCount";
import Night from "../components/ComponentForNight";
import PeopleRooms from "../components/ComponentForPeopleRooms";
import BathRoom from "../components/ComponentForBathroom";
import Pool from "../components/ComponentForPool";
import AdvantagesMain from "../components/Advantages";
import Options from "../components/OptionsComponent";
import PagesImg from "../components/ComponentPages";
import CourseInputsAndPrace from "../components/ComponentForCourseInputsAndPrace";
import useBodyLogic from "../components/ComponentBodyLogic";
import AppLayoutManager from "../components/AppLayoutManager";
import MapAndDate from "../components/ComponentForMapAndDate"; 

function Body({ searchValue }: { searchValue: string }) {
  const {
    count,
    countWithNight,
    delivery,
    handleIncrement,
    handleDecrement,
    handleIncrementForNight,
    handleDecrementForNight,
  } = useBodyLogic();

  return (
    <div
      className="w-full"
      style={{ minHeight: "calc(100vh - 150px)" }}
    >
      <div className="flex flex-row gap-6 mt-6 px-6 max-w-[1440px] mx-auto">
        <div className="w-[320px] border border-gray-300 rounded-2xl p-4 h-[1410px] bg-white shadow-md mt-[120px] m-5">
          <Options />
          <BodyInfo />
          <CourseInputsAndPrace />
          <PeopleCount
            count={count}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
          <Night />
          <PeopleRooms />
          <BathRoom />
          <Pool />
          <AdvantagesMain />
        </div>
          <MapAndDate />
        <div className="flex-1 flex flex-col gap-16 -ml-[150px] mt-[500px]">
          <AppLayoutManager searchValue={searchValue} />
          <PagesImg />
        </div>
      </div>
    </div>
  );
}

export default Body;
