import React, { useState } from "react";
import { housesData } from "../data.js";
import { useFavoritesStore } from "../store/useFavoritesStore";
import { useFilterStore } from "../store/filterStore";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";

interface HousesProps {
  layout: "layout1" | "layout2";
  searchValue: string;
  initialData: typeof housesData;
}

function Houses({ layout, searchValue, initialData }: HousesProps) {
  const [homeImages] = useState(initialData);
  const addFavorite = useFavoritesStore((s) => s.addFavorite);
  const removeFavorite = useFavoritesStore((s) => s.removeFavorite);
  const isFavorite = useFavoritesStore((s) => s.isFavorite);
  const setModalOpen = useFavoritesStore((s) => s.setModalOpen);

  const { region } = useFilterStore();
  const navigate = useNavigate();

  const filteredHomes = homeImages.filter((home) => {
    const matchesSearch = home.title.toLowerCase().includes(searchValue.toLowerCase());
    const matchesRegion = region ? home.region === region : true;
    return matchesSearch && matchesRegion;
  });

  // Layout logic
  const columns = layout === "layout1" ? 3 : 2; // layout1 → 3 կողքի, layout2 → 2 կողքի
  const maxCardWidth = layout === "layout1" ? 360 : 460; // փոքր/մեծ card
  const gap = layout === "layout1" ? 20 : 25;

  const getImagePath = (filename: string) => `/${filename}`;

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
          const id = house.id.toString();
          const favorite = isFavorite(id);

          return (
            <div
              key={id}
              className={`shadow-md p-[10px] cursor-pointer transform transition hover:scale-[1.02] ${
                favorite ? "bg-gray-100" : "bg-white"
              }`}
              style={{ width: "100%", maxWidth: `${maxCardWidth}px` }}
              onClick={() => navigate(`/house/${id}`)}
            >
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                loop={true}
                className="w-full h-[250px] rounded-[15px]"
              >
                {house.image && (
                  <SwiperSlide>
                    <img
                      className="w-full h-[250px] object-cover rounded-[15px]"
                      src={getImagePath(house.image)}
                      alt={house.title}
                    />
                  </SwiperSlide>
                )}
                {house.sliderImages?.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img
                      className="w-full h-[250px] object-cover rounded-[15px]"
                      src={getImagePath(img)}
                      alt={`${house.title} ${i + 1}`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="mt-2 ml-3 flex items-center justify-between">
                <div>
                  <h2 className="font-bold text-lg">{house.title}</h2>
                  <p>{house.people} people</p>
                  <p>{house.rooms || 1} սենյակ</p>
                  <p className="mt-3 text-2xl">{house.prace}</p>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (favorite) removeFavorite(id);
                    else addFavorite({ id, title: house.title, image: house.image });
                    setModalOpen(!favorite);
                  }}
                  className="ml-3"
                >
                  <img
                    src={favorite ? "/housesImages/heart.png" : "/housesImages/heart1.png"}
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

export default Houses;
