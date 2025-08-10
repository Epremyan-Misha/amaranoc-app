import React from "react";
import "../index.css";
import BodyInfo from "../components/ComponentForBodyInfo";
import MapBody from "../components/ComponentForMapBody";
import PeopleCount from "../components/ComponentForPeopleCount";
import Night from "../components/ComponentForNight";
import PeopleCountWithNight from "../components/ComponentForPeopleCountWithNight";
import PeopleRooms from "../components/ComponentForPeopleRooms";
import BathRoom from "../components/ComponentForBathroom";
import Pool from "../components/ComponentForPool";
import AdvantagesMain from "../components/Advantages";
import Houses from "../components/ComponentHouses";
import Options from "../components/OptionsComponent";
import PagesImg from "../components/ComponentPages";
import CourseInputsAndPrace from "../components/ComponentForCourseInputsAndPrace";
import useBodyLogic from "../components/ComponentBodyLogic";
function Body() {
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
    <>
      <MapBody />
      <div className="flex -mt-24">
        <div className="p-4 border-2 border-[rgb(196,193,193)] border-solid w-80 h-[1467px] ml-14 -mt-27 rounded-2xl">
          <BodyInfo />
          <CourseInputsAndPrace />
          <PeopleCount
            count={count}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
          <Night />
          <PeopleCountWithNight
            countWithNight={countWithNight}
            onIncrement={handleIncrementForNight}
            onDecrement={handleDecrementForNight}
            delivery={delivery}
          />
          <PeopleRooms />
          <BathRoom />
          <Pool />
          <AdvantagesMain />
        </div>
        <Houses />
        <PagesImg />
        <Options />
      </div>
    </>
  );
}

export default Body;
