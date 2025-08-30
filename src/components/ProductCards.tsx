// src/components/HouseCard.tsx
import React from "react";
import { useFavoritesStore } from "../store/useFavoritesStore";

interface HouseCardProps {
  house: any; // կարող եք type անել ըստ housesData-ի
}

const fallbackSrc = "/imagesForOptions/default.png";

export default function HouseCard({ house }: HouseCardProps) {
  const addFavorite = useFavoritesStore((state) => state.addFavorite);
  const removeFavorite = useFavoritesStore((state) => state.removeFavorite);
  const isFavorite = useFavoritesStore((state) => state.isFavorite);
  const setModalOpen = useFavoritesStore((state) => state.setModalOpen);

  const favorite = isFavorite(house.id.toString());

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (favorite) {
      removeFavorite(house.id.toString());
    } else {
      addFavorite({ id: house.id.toString(), title: house.title, image: house.image });
    }
    setModalOpen(true);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    if (!target.src.includes(fallbackSrc)) target.src = fallbackSrc;
  };

  const imagePath = house.image ? `/imagesForOptions/${house.image}` : fallbackSrc;

  return (
    <div className="cursor-pointer p-2 relative">
      <img src={imagePath} alt={house.title} onError={handleError} className="w-full h-48 object-cover rounded" />
      <p className="mt-2">{house.title}</p>
      <p>People: {house.people}</p>
      <p>Price: {house.prace}</p>
      <button
        onClick={handleFavoriteClick}
        className="absolute top-2 right-2 text-2xl focus:outline-none"
        aria-label={favorite ? "Հեռացնել սիրածներից" : "Ավելացնել սիրածներին"}
      >
        {favorite ? "❤️" : "🤍"}
      </button>
    </div>
  );
}
