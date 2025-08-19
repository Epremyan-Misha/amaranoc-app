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
import Options from "../components/OptionsComponent";
import PagesImg from "../components/ComponentPages";
import CourseInputsAndPrace from "../components/ComponentForCourseInputsAndPrace";
import useBodyLogic from "../components/ComponentBodyLogic";
import AppLayoutManager from "../components/AppLayoutManager";

// ✅ Ստանում ենք searchValue որպես prop
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
      style={{ minHeight: "calc(100vh - 150px)" }} // Կարգավորիր ըստ Head+Footer-ի բարձրության
    >
      <MapBody />
      <div className="flex flex-row gap-6 mt-6 px-6 max-w-[1440px] mx-auto">
        <div className="w-[320px] border border-gray-300 rounded-2xl p-4 h-fit bg-white shadow-md -mt-[200px]">
          <Options />
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

        <div className="flex-1 flex flex-col gap-6">
          {/* ✅ Փոխանցում ենք AppLayoutManager-ին */}
          <AppLayoutManager searchValue={searchValue} />
          <PagesImg />
        </div>
      </div>
    </div>
  );
}

export default Body;
