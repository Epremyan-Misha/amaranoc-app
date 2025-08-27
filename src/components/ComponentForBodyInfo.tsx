import React, { useEffect, useState } from "react";
import "../index.css";
import { useFilterStore } from "../store/filterStore";

const baseUrl = "https://myproject-73982-default-rtdb.firebaseio.com/";

interface Region {
  id: string;
  name: string;
}

function BodyInfo() {
  const [infoHouseForBody, setInfoHouseForBody] = useState<Region[]>([]);
  const { region, setRegion } = useFilterStore();

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

        const list: Region[] = Array.isArray(data)
          ? data.map((item, index) => ({
              ...item,
              id: item?.id?.toString() || `region-${index}`,
              name: item?.name || "",
            }))
          : Object.entries(data).map(([firebaseKey, value]) => ({
              ...(value as any),
              id: firebaseKey,
              name: (value as any)?.name || "",
            }));

        setInfoHouseForBody(list);
      })
      .catch((err) => console.error("Error fetching infoHouseForBody:", err));
  }, []);

  return (
    <div>
      <h3 className="ml-6 -mt-3 font-semibold">Տարածաշրջան</h3>
      <div className="border-b border-b-[rgb(233,231,231)]">
        <div className="cursor-pointer ml-[25px] text-[rgb(75,74,74)] max-h-[200px] overflow-y-auto pr-2">
          {/* ✅ "Բոլորը" */}
          <p
            onClick={() => setRegion("")}
            className={`py-1 hover:text-black ${
              region === "" ? "font-bold text-black" : ""
            }`}
          >
            Բոլորը
          </p>

          {infoHouseForBody.map((info) =>
            info.name ? (
              <p
                key={info.id}
                onClick={() => setRegion(info.name)}
                className={`py-1 hover:text-black ${
                  region === info.name ? "font-bold text-black" : ""
                }`}
              >
                {info.name}
              </p>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}

export default BodyInfo;
