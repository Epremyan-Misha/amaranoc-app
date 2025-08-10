import React, { useEffect, useState } from "react";
import "../index.css";

const baseUrl = "https://myproject-73982-default-rtdb.firebaseio.com/";

interface PoolText {
  text: string;
  id?: string | number;
}

interface PoolH4 {
  h4: string;
  id?: string | number;
}

function Pool() {
  const [h4ForPool, setH4ForPool] = useState<PoolH4[]>([]);
  const [firstTextPool, setFirstTextPool] = useState<PoolText[]>([]);
  const [secondTextPool, setSecondTextPool] = useState<PoolText[]>([]);
  const [lastTextPool, setLastTextPool] = useState<PoolText[]>([]);

  useEffect(() => {
    fetch(`${baseUrl}h4ForPool.json`)
      .then(res => {
        if (!res.ok) throw new Error("Network response not ok");
        return res.json();
      })
      .then(data => setH4ForPool(Array.isArray(data) ? data : Object.values(data)))
      .catch(err => console.error("Error fetching h4ForPool:", err));

    fetch(`${baseUrl}firstTextPool.json`)
      .then(res => {
        if (!res.ok) throw new Error("Network response not ok");
        return res.json();
      })
      .then(data => setFirstTextPool(Array.isArray(data) ? data : Object.values(data)))
      .catch(err => console.error("Error fetching firstTextPool:", err));

    fetch(`${baseUrl}secondTextPool.json`)
      .then(res => {
        if (!res.ok) throw new Error("Network response not ok");
        return res.json();
      })
      .then(data => setSecondTextPool(Array.isArray(data) ? data : Object.values(data)))
      .catch(err => console.error("Error fetching secondTextPool:", err));

    fetch(`${baseUrl}lastTextPool.json`)
      .then(res => {
        if (!res.ok) throw new Error("Network response not ok");
        return res.json();
      })
      .then(data => setLastTextPool(Array.isArray(data) ? data : Object.values(data)))
      .catch(err => console.error("Error fetching lastTextPool:", err));
  }, []);

  return (
    <div className="border-b border-b-[1px] border-b-[rgb(233,231,231)] h-[260px]">
      {h4ForPool.map((info, index) => (
        <h4 key={info.id ?? index} className="ml-[30px] text-[rgb(46,46,46)]">
          {info.h4}
        </h4>
      ))}

      <div className="flex">
        {firstTextPool.map((info, index) => (
          <p
            key={info.id ?? index}
            className="cursor-pointer m-[10px] text-center ml-[10px] mt-[25px] w-[80px] h-[45px] border border-[rgb(179,177,177)] text-[rgb(107,105,105)] bg-white p-[15px] rounded-[25px] transition duration-1000"
          >
            {info.text}
          </p>
        ))}
      </div>

      <div className="flex">
        {secondTextPool.map((info, index) => (
          <p
            key={info.id ?? index}
            className="cursor-pointer m-[10px] text-center ml-[10px] mt-[25px] w-[120px] h-[45px] border border-[rgb(179,177,177)] text-[rgb(107,105,105)] bg-white p-[15px] rounded-[25px] transition duration-1000"
          >
            {info.text}
          </p>
        ))}
      </div>

      {lastTextPool.map((info, index) => (
        <div
          key={info.id ?? index}
          className="cursor-pointer text-center ml-[10px] w-[130px] h-[65px] border border-[rgb(179,177,177)] text-[rgb(107,105,105)] bg-white p-[15px] rounded-[25px] transition duration-1000 hover:bg-[gainsboro]"
        >
          {info.text}
        </div>
      ))}
    </div>
  );
}

export default Pool;
