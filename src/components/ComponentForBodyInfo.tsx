import React, { useEffect, useState } from "react";
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
      .then((res) => res.json())
      .then((data) => {
        if (!data) return setInfoHouseForBody([]);
        const list: Region[] = Array.isArray(data)
          ? data.map((item, index) => ({
              ...item,
              id: item?.id?.toString() || `region-${index}`,
              name: item?.name || "",
            }))
          : Object.entries(data).map(([key, value]) => ({
              id: key,
              name: (value as any)?.name || "",
            }));
        setInfoHouseForBody(list);
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1 className="ml-6 m-5 text-[25px]  text-black -mt-34">Տարածաշրջան</h1>
      <div className="border-b border-gray-200">
        <div className="cursor-pointer ml-6 mt-2 max-h-52 overflow-y-auto pr-2">
          <div
            onClick={() => setRegion("")}
            className="flex items-center space-x-2 py-1 hover:text-black cursor-pointer"
          >
            <span
              className={`w-6 h-6 border rounded-sm flex items-center justify-center ${
                region === "" ? "bg-orange-400 border-orange-500" : "border-gray-400"
              }`}
            >
              {region === "" && <span className="text-white text-xs">✓</span>}
            </span>
            <span className={region === "" ? "font-bold text-black text-[17px]" : ""}>
              Բոլորը
            </span>
          </div>

          {infoHouseForBody.map((info) =>
            info.name ? (
              <div
                key={info.id}
                onClick={() => setRegion(info.name)}
                className="text-gray-600 text-[17px] flex items-center space-x-2 py-1 hover:text-black cursor-pointer"
              >
                <span
                  className={`w-6 h-6 border rounded-sm flex items-center justify-center ${
                    region === info.name
                      ? "bg-orange-400 border-orange-500"
                      : "border-gray-400"
                  }`}
                >
                  {region === info.name && (
                    <span className="text-white text-xs">✓</span>
                  )}
                </span>
                <span className={region === info.name ? "font-bold text-black" : ""}>
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
