import React from "react";
import { useFavoritesStore } from "../store/useFavoritesStore";

interface ProductCardProps {
  id: string;
  title: string;
  image: string;
}

const fallbackSrc = "/imagesForOptions/default.png";

function ProductCard({ id, title, image }: ProductCardProps) {
  const addFavorite = useFavoritesStore((state) => state.addFavorite);
  const removeFavorite = useFavoritesStore((state) => state.removeFavorite);
  const isFavorite = useFavoritesStore((state) => state.isFavorite);
  const setModalOpen = useFavoritesStore((state) => state.setModalOpen);

  const favorite = isFavorite(id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (favorite) {
      removeFavorite(id);
    } else {
      addFavorite({ id, title, image });
    }
    setModalOpen(true); 
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    if (!target.src.includes(fallbackSrc)) {
      target.src = fallbackSrc;
    }
  };

  const folder = "photo";
  const filename = image.startsWith(`${folder}/`)
    ? image.slice(folder.length + 1)
    : image;

  const imagePath = image
    ? `/imagesForOptions/${folder}/${encodeURIComponent(filename)}`
    : fallbackSrc;

  return (
    <div className="cursor-pointer p-[10px] ml-[40px] relative">
      <img
        className="productCardImg"
        src={imagePath}
        alt={title}
        onError={handleError}
      />
      <p className="mt-[15px]">{title}</p>

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

export default ProductCard;
