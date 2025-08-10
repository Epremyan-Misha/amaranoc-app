import React, { useEffect, useState } from "react";
import "../index.css";

const baseUrl = "https://myproject-73982-default-rtdb.firebaseio.com/";

interface AdvantageItem {
  h4?: string;
  text?: string;
  id?: string | number;
}

function AdvantagesMain() {
  const [advantagesH4, setAdvantagesH4] = useState<AdvantageItem[]>([]);
  const [advantagesText, setAdvantagesText] = useState<AdvantageItem[]>([]);

  // Generalized fetch function
  const fetchData = async (
    endpoint: string,
    setter: React.Dispatch<React.SetStateAction<AdvantageItem[]>>
  ) => {
    try {
      const res = await fetch(`${baseUrl}${endpoint}.json`);
      if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);

      const data = await res.json();
      if (!data) return;

      const list = Array.isArray(data)
        ? data.map((item, index) => ({ ...item, id: item?.id ?? index }))
        : Object.entries(data).map(([key, value]) => ({
            ...value,
            id: value?.id ?? key,
          }));

      setter(list);
    } catch (err) {
      console.error(`Error fetching ${endpoint}:`, err);
    }
  };

  useEffect(() => {
    fetchData("advantagesH4", setAdvantagesH4);
    fetchData("advantagesText", setAdvantagesText);
  }, []);

  return (
    <div>
      {advantagesH4.map((info) => (
        <h4
          key={`h4-${info.id}`}
          className="ml-[30px] text-[rgb(46,46,46)] mt-[10px]"
        >
          {info.h4}
        </h4>
      ))}

      <div className="cursor-pointer ml-[25px] text-[rgb(75,74,74)] mt-[40px]">
        {advantagesText.map((info) => (
          <p key={`text-${info.id}`}>{info.text}</p>
        ))}
      </div>
    </div>
  );
}

export default AdvantagesMain;
