import React from "react";
import "../index.css";

function MapBody() {
  return (
    <>
      <div className="flex ml-[15px] mt-[140px] m-[50px]">
        <div className="flex items-center ml-[380px] mt-[140px] border border-[rgb(128,126,126)] border-2 p-[10px] w-[120px] rounded-[15px]">
          Քարտեզ
        </div>
        <img className="h-10 mt-35" src="images/copy.png" alt="map icon" />
      </div>
    </>
  );
}

export default MapBody;
