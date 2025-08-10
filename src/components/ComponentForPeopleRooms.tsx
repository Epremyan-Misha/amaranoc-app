import React, { useEffect, useState } from "react";
import "../index.css";

const baseUrl = "https://myproject-73982-default-rtdb.firebaseio.com/";

interface InfoH4 {
  h4: string;
  id?: string | number;
}

interface InfoNum {
  num: string | number;
  id?: string | number;
}

function PeopleRooms() {
  const [h4PeopleRooms, setH4PeopleRooms] = useState<InfoH4[]>([]);
  const [firstPeopleRooms, setFirstPeopleRooms] = useState<InfoNum[]>([]);
  const [secondPeopleRooms, setSecondPeopleRooms] = useState<InfoNum[]>([]);
  const [lastPeopleRooms, setLastPeopleRooms] = useState<InfoNum[]>([]);

  useEffect(() => {
    fetch(`${baseUrl}h4PeopleRooms.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response not ok");
        return res.json();
      })
      .then((data) =>
        setH4PeopleRooms(Array.isArray(data) ? data : Object.values(data))
      )
      .catch((err) => console.error("Error fetching h4PeopleRooms:", err));

    fetch(`${baseUrl}firstPeopleRooms.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response not ok");
        return res.json();
      })
      .then((data) =>
        setFirstPeopleRooms(Array.isArray(data) ? data : Object.values(data))
      )
      .catch((err) => console.error("Error fetching firstPeopleRooms:", err));

    fetch(`${baseUrl}secondPeopleRooms.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response not ok");
        return res.json();
      })
      .then((data) =>
        setSecondPeopleRooms(Array.isArray(data) ? data : Object.values(data))
      )
      .catch((err) => console.error("Error fetching secondPeopleRooms:", err));

    fetch(`${baseUrl}lastPeopleRooms.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response not ok");
        return res.json();
      })
      .then((data) =>
        setLastPeopleRooms(Array.isArray(data) ? data : Object.values(data))
      )
      .catch((err) => console.error("Error fetching lastPeopleRooms:", err));
  }, []);

  return (
    <div className="h-[270px] border-b border-b-[1px] border-b-[rgb(233,231,231)]">
      {h4PeopleRooms.map((info, index) => (
        <h4 key={info.id ?? index} className="ml-[30px] text-[rgb(46,46,46)]">
          {info.h4}
        </h4>
      ))}
      <div className="flex">
        {firstPeopleRooms.map((info, index) => (
          <p
            key={info.id ?? index}
            className="cursor-pointer m-[10px] text-center ml-[10px] w-[70px] h-[45px] border border-[rgb(179,177,177)] text-[rgb(93,53,53)] bg-white p-[15px] rounded-[25px] transition duration-1000 hover:bg-[gainsboro]"
          >
            {info.num}
          </p>
        ))}
      </div>
      <div className="flex">
        {secondPeopleRooms.map((info, index) => (
          <p
            key={info.id ?? index}
            className="cursor-pointer m-[10px] text-center ml-[10px] mt-[-5px] w-[70px] h-[45px] border border-[rgb(179,177,177)] text-[rgb(107,105,105)] bg-white p-[15px] rounded-[25px] transition duration-1000"
          >
            {info.num}
          </p>
        ))}
      </div>
      {lastPeopleRooms.map((info, index) => (
        <div
          key={info.id ?? index}
          className="cursor-pointer text-center ml-[10px] w-[80px] h-[65px] border border-[rgb(179,177,177)] text-[rgb(107,105,105)] bg-white p-[15px] rounded-[25px] transition duration-1000 hover:bg-[gainsboro]"
        >
          {info.num}
        </div>
      ))}
    </div>
  );
}

export default PeopleRooms;
