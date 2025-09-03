import React, { useEffect, useState } from "react";
import { useFilterStore } from "../store/filterStore";

const baseUrl = "https://myproject-73982-default-rtdb.firebaseio.com/";

interface Region {
  id: string;
  name: string;
}

function BodyInfo() {
  const [regions, setRegions] = useState<string[]>([]);
  const { region, setRegion } = useFilterStore();

  useEffect(() => {
    fetch(`${baseUrl}infoHouseForBody.json`)
      .then((res) => res.json())
      .then((data) => {
        if (!data) return setRegions([]);
        const list: string[] = Object.values(data)
          .map((item: any) => item.name)
          .filter(Boolean)
          .map((name: string) => name.replace(/\d+$/, "").trim()); // հանում ենք թվերը
        const uniqueRegions = Array.from(new Set(list)); // կրկնօրինակները հանում
        setRegions(uniqueRegions);
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1 className="ml-6 m-5 text-[25px] text-black -mt-39">Տարածաշրջան</h1>
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

          {regions.map((name) => (
            <div
              key={name}
              onClick={() => setRegion(name.toLowerCase())}
              className="text-gray-600 text-[17px] flex items-center space-x-2 py-1 hover:text-black cursor-pointer"
            >
              <span
                className={`w-6 h-6 border rounded-sm flex items-center justify-center ${
                  region === name.toLowerCase()
                    ? "bg-orange-400 border-orange-500"
                    : "border-gray-400"
                }`}
              >
                {region === name.toLowerCase() && <span className="text-white text-xs">✓</span>}
              </span>
              <span className={region === name.toLowerCase() ? "font-bold text-black" : ""}>
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BodyInfo;
