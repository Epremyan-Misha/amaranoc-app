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
        const result = Array.isArray(data) ? data : Object.values(data);
        setInputsForFooter(result);
      })
      .catch(err => console.error("Error fetching inputsForFotter:", err));
  }, []);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="mt-16 flex flex-wrap justify-center items-center gap-6"
    >
      {inputsForFooter.map((info) => (
        <input
          key={info.id ?? Math.random()}
          type={info.type}
          placeholder={info.placeHolder}
          className="h-[50px] w-[250px] rounded-[12px] px-4 border border-white bg-[rgb(61,61,61)] text-white placeholder-white placeholder-opacity-80 outline-none focus:ring-2 focus:ring-orange-500 transition"
        />
      ))}
      <button
        type="submit"
        className="h-[50px] px-8 text-white font-semibold bg-[rgb(231,109,21)] rounded-[12px] shadow-md hover:bg-orange-600 transition duration-300"
      >
        Ուղարկել
      </button>
    </form>
  );
}

export default Inputs;
