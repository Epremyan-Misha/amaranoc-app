import React, { useEffect, useState } from "react";
import "../index.css";

const baseUrl = "https://myproject-73982-default-rtdb.firebaseio.com/";

interface Region {
  id: string;
  name: string;
}

function BodyInfo() {
  const [infoHouseForBody, setInfoHouseForBody] = useState<Region[]>([]);

  useEffect(() => {
    fetch(`${baseUrl}infoHouseForBody.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response not ok");
        return res.json();
      })
      .then((data) => {
        if (!data) {
          setInfoHouseForBody([]);
          return;
        }

        const list = Array.isArray(data)
          ? data.map((item, index) => ({
              ...item,
              id: item?.id?.toString() || `region-${index}`,
            }))
          : Object.entries(data).map(([firebaseKey, value]) => ({
              ...value,
              id: firebaseKey,
            }));

        setInfoHouseForBody(list);
      })
      .catch((err) =>
        console.error("Error fetching infoHouseForBody:", err)
      );
  }, []);

  return (
    <>
      <h3 className="ml-6 -mt-30">Տարածաշրջան</h3>
      <div className="border-b border-b-[rgb(233,231,231)] border-b-[1px]">
        <div className="cursor-pointer ml-[25px] text-[rgb(75,74,74)]">
          {infoHouseForBody.map((info) => (
            <p key={info.id}>{info.name}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default BodyInfo;
