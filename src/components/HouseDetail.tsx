import React from "react";
import { useParams } from "react-router-dom";
import { housesData } from "../data.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";

function HouseDetail() {
  const { id } = useParams<{ id: string }>();
  const house = housesData.find((h) => h.id?.toString() === id);

  if (!house) return <p className="text-center mt-10 text-xl text-red-500">Տունը չի գտնվել</p>;

  const getImagePath = (filename: string) => `/${filename}`;

  return (
    <div className="max-w-6xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-5 text-center text-gray-800">{house.title}</h1>

      <Swiper
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="rounded-xl overflow-hidden shadow-lg mb-6"
      >
        {house.image && (
          <SwiperSlide>
            <img
              src={getImagePath(house.image)}
              alt={house.title}
              className="w-full h-126 object-cover"
            />
          </SwiperSlide>
        )}
        {house.sliderImages?.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={getImagePath(img)}
              alt={`${house.title} ${i + 1}`}
              className="w-full h-126 object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="bg-white shadow-md rounded-xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <p className="text-lg font-medium text-gray-700">People: <span className="font-bold">{house.people}</span></p>
          <p className="text-lg font-medium text-gray-700">Rooms: <span className="font-bold">{house.rooms || 1}</span></p>
          <p className="text-xl font-bold text-green-600 mt-2">Price: {house.prace}</p>
        </div>
      </div>
    </div>
  );
}

export default HouseDetail;
