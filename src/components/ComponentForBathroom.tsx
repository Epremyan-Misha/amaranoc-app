import React, { useEffect, useState } from "react";
import "../index.css";

const baseUrl = "https://myproject-73982-default-rtdb.firebaseio.com/";

interface BathroomItem {
  h4?: string;
  num?: string;
}

function BathRoom() {
  const [h4Bathroom, setH4Bathroom] = useState<BathroomItem[]>([]);
  const [firstBathroom, setFirstBathroom] = useState<BathroomItem[]>([]);
  const [lastBathroom, setLastBathroom] = useState<BathroomItem[]>([]);

  useEffect(() => {
    // Fetch h4Bathroom
    fetch(`${baseUrl}h4Bathroom.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response not ok");
        return res.json();
      })
      .then((data) => setH4Bathroom(Array.isArray(data) ? data : Object.values(data)))
      .catch((err) => console.error("Error fetching h4Bathroom:", err));

    // Fetch firstBathroom
    fetch(`${baseUrl}firstBathroom.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response not ok");
        return res.json();
      })
      .then((data) => setFirstBathroom(Array.isArray(data) ? data : Object.values(data)))
      .catch((err) => console.error("Error fetching firstBathroom:", err));

    // Fetch lastBathroom
    fetch(`${baseUrl}lastBathroom.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response not ok");
        return res.json();
      })
      .then((data) => setLastBathroom(Array.isArray(data) ? data : Object.values(data)))
      .catch((err) => console.error("Error fetching lastBathroom:", err));
  }, []);

  return (
    <div className="border-b border-b-[1px] border-b-[rgb(233,231,231)] h-[210px]">
      {h4Bathroom.map((info, index) => (
        <h4 key={index} className="ml-[30px] text-[rgb(46,46,46)]">
          {info.h4}
        </h4>
      ))}

      <div className="flex">
        {firstBathroom.map((info, index) => (
          <p
            key={index}
            className="cursor-pointer m-[10px] text-center ml-[10px] mt-[25px] w-[70px] h-[45px] border border-[rgb(179,177,177)] text-[rgb(107,105,105)] bg-white p-[15px] rounded-[25px] transition duration-1000"
          >
            {info.num}
          </p>
        ))}
      </div>

      {lastBathroom.map((info, index) => (
        <div
          key={index}
          className="cursor-pointer text-center ml-[10px] w-[80px] h-[60px] border border-[rgb(179,177,177)] text-[rgb(107,105,105)] bg-white p-[15px] rounded-[25px] transition duration-1000 hover:bg-[gainsboro]"
        >
          {info.num}
        </div>
      ))}
    </div>
  );
}

export default BathRoom;
