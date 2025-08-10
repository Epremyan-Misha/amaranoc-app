import React, { useEffect, useState } from "react";
import "../index.css";

const baseUrl = "https://myproject-73982-default-rtdb.firebaseio.com/";

interface HomeImage {
  image: string;
  title: string;
  people: number | string;
  prace: string;
  id?: string | number;
}

function Houses() {
  const [homeImages, setHomeImages] = useState<HomeImage[]>([]);

  useEffect(() => {
    fetch(`${baseUrl}homeImages.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response not ok");
        return res.json();
      })
      .then((data) => setHomeImages(Array.isArray(data) ? data : Object.values(data)))
      .catch((err) => console.error("Error fetching homeImages:", err));
  }, []);

  return (
    <div className="mt-[150px] grid grid-cols-3 gap-[40px] p-[30px]">
      {homeImages.map((img, index) => {
        console.log("Image src:", `/housesImages/${img.image}`); // Այստեղ կարող ես թողնել console.log-ը
        return (
          <div key={img.id ?? index} className="h-auto">
            <div className="cursor-pointer transition duration-500 flex flex-col items-start rounded-[25px] p-[10px] shadow-[2px_2px_4px_black] w-full max-w-[310px] hover:w-[312px] hover:h-[365px]">
             <img
  className="ml-[-5px] rounded-[5px] w-[310px] transition duration-500 hover:w-[320px]"
  src={`/housesImages/${img.image.replace("housesPhoto/", "")}`}
  alt={img.title}
  onError={(e) => {
    console.error("Image not found:", e.currentTarget.src);
    e.currentTarget.src = "/images/default.png"; // placeholder if missing
  }}
/>
              <div className="flex">
                <p className="mt-[10px]">{img.title}</p>
                <img
                  className="h-[25px] mt-[14px] ml-[140px]"
                  src="images/iconPeople.png"
                  alt="people icon"
                />
                <p className="ml-[25px] mt-[10px]">{img.people}</p>
              </div>
              <p className="text-xl text-[rgb(156,155,155)] transition duration-500 hover:text-black-500 mt-[15px]">
                {img.prace}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Houses;
