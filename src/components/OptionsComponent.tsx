import React, { useRef } from "react";
import "../index.css";

function Options(): JSX.Element {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -250, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });
  };

  const items = [
    { src: "/imagesForOptions/nkar1.png", label: "Առանձնատներ", size: 45 },
    { src: "/imagesForOptions/nkar2.png", label: "Frame Houses", size: 45 },
    { src: "/imagesForOptions/nkar3.png", label: "Տնակներ", size: 45 },
    { src: "/imagesForOptions/nkar4.png", label: "Փակ լողավազան", size: 45 },
    { src: "/imagesForOptions/nkar5.png", label: "Աղմուկից հեռու", size: 45 },
    { src: "/imagesForOptions/nkar6.png", label: "Շքեղ տեսարան", size: 45 },
    { src: "/imagesForOptions/nkar7.png", label: "Պահանջված", size: 55 },
    { src: "/imagesForOptions/nkar8.png", label: "Լճի ափին", size: 55 },
    { src: "/imagesForOptions/nkar9.png", label: "Գետի ափին", size: 55 },
    { src: "/imagesForOptions/nkar10.png", label: "Հյուրանոցներ", size: 55 },
    { src: "/imagesForOptions/nkar11.png", label: "Նոր", size: 55 },
  ];

  return (
    <div className="relative w-[1050px] h-[140px] mt-15 ml-[400px] border-t border-b border-[rgb(248,248,248)] flex items-center">
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow cursor-pointer z-10 hover:bg-gray-200 transition"
      >
        &#8592;
      </button>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow cursor-pointer z-10 hover:bg-gray-200 transition"
      >
        &#8594;
      </button>

      <div
        ref={scrollRef}
        className="flex items-center gap-6 overflow-hidden pl-5 pr-5 w-full"
      >
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-shrink-0 cursor-pointer group">
            <img
              className={`w-[${item.size}px] h-[${item.size}px] object-contain transition group-hover:scale-105`}
              src={item.src}
              alt={item.label}
            />
            <p className="text-black font-semibold mt-2 text-center">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Options;
