import React, { useEffect, useState } from "react";
import "../index.css";

const baseUrl = "https://myproject-73982-default-rtdb.firebaseio.com/";

interface InputInfo {
  id?: string | number;
  type: string;
  placeHolder: string;
}

function Inputs() {
  const [inputsForFooter, setInputsForFooter] = useState<InputInfo[]>([]);

  useEffect(() => {
    fetch(`${baseUrl}inputsForFotter.json`)
      .then(res => {
        if (!res.ok) throw new Error("Network response not ok");
        return res.json();
      })
      .then((data: InputInfo[] | Record<string, InputInfo>) => {
        // Եթե զանգված չէ, վերցնում ենք Object.values-ը
        const result = Array.isArray(data) ? data : Object.values(data);
        setInputsForFooter(result);
      })
      .catch(err => console.error("Error fetching inputsForFotter:", err));
  }, []);

  return (
    <div className="mt-[100px] flex gap-[75px] ml-[60px]">
      {inputsForFooter.map((info) => (
        <input
          key={info.id ?? Math.random()}
          className="h-[50px] w-[250px] rounded-[15px] border border-white bg-[rgb(61,61,61)] text-white"
          type={info.type}
          placeholder={info.placeHolder}
        />
      ))}
      <button className="text-white bg-[rgb(231,109,21)] rounded-[15px] w-[150px] ml-[-15px] cursor-pointer transition duration-[2000ms]">
        Ուղարկել
      </button>
    </div>
  );
}

export default Inputs;
