import React from "react";
import { housesData } from "../data";
import { useFavoritesStore } from "../store/useFavoritesStore";
import { useFilterStore } from "../store/filterStore";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";

// 🟢 հնարավոր pool տեսակներ
const poolOptions = ["Բաց", "Փակ", "Տաքացվող", "Առանց լողավազան"];

// 🟢 ամեն տանը random rooms (1–6) և random poolType ավելացնենք
const housesWithExtras = housesData.map((house) => ({
  ...house,
  rooms: house.rooms ?? Math.floor(Math.random() * 6) + 1,
  poolType:
    house.poolType ??
    poolOptions[Math.floor(Math.random() * poolOptions.length)],
}));

interface HousesProps {
  layout: "layout1" | "layout2";
  searchValue: string;
}

export default function Houses({ layout, searchValue }: HousesProps) {
  const addFavorite = useFavoritesStore((s) => s.addFavorite);
  const removeFavorite = useFavoritesStore((s) => s.removeFavorite);
  const isFavorite = useFavoritesStore((s) => s.isFavorite);
  const setModalOpen = useFavoritesStore((s) => s.setModalOpen);

  const {
    region,
    minPrice,
    maxPrice,
    peopleCount,
    nightStay,
    roomsCount,
    poolType,
  } = useFilterStore();

  const navigate = useNavigate();

  const filteredHomes = housesWithExtras.filter((house) => {
    const titleLower = house.title.toLowerCase();

    const matchesSearch = searchValue
      ? titleLower.includes(searchValue.toLowerCase())
      : true;

    const matchesRegion = region ? titleLower.includes(region.toLowerCase()) : true;

    const homePrice = Number(house.prace.replace(/[^0-9]/g, ""));
    const matchesMin = minPrice !== null ? homePrice >= minPrice : true;
    const matchesMax = maxPrice !== null ? homePrice <= maxPrice : true;

    const housePeople = Number(house.people);
    const matchesPeople = peopleCount ? housePeople >= peopleCount : true;

    let matchesNight = true;
    if (nightStay === "yes") matchesNight = house.night === true;
    if (nightStay === "no") matchesNight = house.night === false;

    const matchesRooms =
      roomsCount !== null
        ? roomsCount === 7
          ? house.rooms >= 6
          : house.rooms === roomsCount
        : true;

    const matchesPool = poolType ? house.poolType === poolType : true;

    return (
      matchesSearch &&
      matchesRegion &&
      matchesMin &&
      matchesMax &&
      matchesPeople &&
      matchesNight &&
      matchesRooms &&
      matchesPool
    );
  });

  const columns = layout === "layout2" ? 3 : 2;
  const maxCardWidth = layout === "layout2" ? 360 : 460;
  const gap = layout === "layout2" ? 20 : 25;

  return (
    <div className="-mt-5 px-[30px] w-full">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: `${gap}px`,
          justifyItems: "center",
          width: "100%",
        }}
      >
        {filteredHomes.map((house) => {
          const favorite = isFavorite(house.id.toString());
          return (
            <div
              key={house.id}
              className={`shadow-md p-[10px] cursor-pointer transform transition hover:scale-[1.02] ${
                favorite ? "bg-gray-100" : "bg-white"
              }`}
              style={{ width: "100%", maxWidth: `${maxCardWidth}px` }}
              onClick={() => navigate(`/house/${house.id}`)}
            >
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                loop={true}
                className="w-full h-[250px] rounded-[15px]"
              >
                <SwiperSlide>
                  <img
                    className="w-full h-[250px] object-cover rounded-[15px]"
                    src={`/${house.image}`}
                    alt={house.title}
                  />
                </SwiperSlide>
                {house.sliderImages?.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img
                      className="w-full h-[250px] object-cover rounded-[15px]"
                      src={`/${img}`}
                      alt={`${house.title} ${i + 1}`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="mt-2 ml-3 flex items-center justify-between">
                <div>
                  <h2 className="font-bold text-lg">{house.title}</h2>
                  <p>{house.people} people</p>
                  <p>{house.rooms} սենյակ</p>
                  <p>Լողավազան: {house.poolType}</p>
                  <p className="mt-3 text-2xl">{house.prace}</p>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (favorite) removeFavorite(house.id.toString());
                    else
                      addFavorite({
                        id: house.id.toString(),
                        title: house.title,
                        image: house.image,
                      });
                    setModalOpen(!favorite);
                  }}
                  className="ml-3"
                >
                  <img
                    src={
                      favorite
                        ? "/housesImages/heart.png"
                        : "/housesImages/heart1.png"
                    }
                    alt="favorite"
                    className="w-7 h-7"
                  />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
