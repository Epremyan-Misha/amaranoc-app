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
      <h3 className="ml-6 -mt-30 font-semibold">Տարածաշրջան</h3>
      <div className="border-b border-b-[rgb(233,231,231)]">
        <div className="cursor-pointer ml-[25px] text-[rgb(75,74,74)] max-h-[200px] mt-5 overflow-y-auto pr-2">
          <div
            onClick={() => setRegion("")}
            className="flex items-center space-x-2 py-1 hover:text-black cursor-pointer"
          >
            <span
              className={`w-4 h-4 border rounded-sm flex items-center justify-center ${
                region === "" ? "bg-yellow-400 border-yellow-500" : "border-gray-400"
              }`}
            >
              {region === "" && <span className="text-white text-xs">✓</span>}
            </span>
            <span className={region === "" ? "font-bold text-black" : ""}>
              Բոլորը
            </span>
          </div>

          {infoHouseForBody.map((info) =>
            info.name ? (
              <div
                key={info.id}
                onClick={() => setRegion(info.name)}
                className="flex items-center space-x-2 py-1 hover:text-black cursor-pointer"
              >
                <span
                  className={`w-4 h-4 border rounded-sm flex items-center justify-center ${
                    region === info.name
                      ? "bg-yellow-400 border-yellow-500"
                      : "border-gray-400"
                  }`}
                >
                  {region === info.name && (
                    <span className="text-white text-xs">✓</span>
                  )}
                </span>

                <span
                  className={
                    region === info.name ? "font-bold text-black" : ""
                  }
                >
                  {info.name}
                </span>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}

export default BodyInfo;
