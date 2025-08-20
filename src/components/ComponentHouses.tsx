import React, { useEffect, useState } from "react";
import "../index.css";
import { useFavoritesStore } from "../store/useFavoritesStore";
import HouseCardSkeleton from "../components/skeletons/HouseCardSkeleton";

interface HomeImage {
  image: string;
  title: string;
  people: number | string;
  prace: string;
  id?: string | number;
}

const baseUrl = "https://myproject-73982-default-rtdb.firebaseio.com/";

interface HousesProps {
  layout: string;
  searchValue: string;
}

function Houses({ layout, searchValue }: HousesProps) {
  const [homeImages, setHomeImages] = useState<HomeImage[]>([]);
  const [isLoading, setIsLoading] = useState(true); // ✅ Loading state

  const favorites = useFavoritesStore((s) => s.favorites);
  const addFavorite = useFavoritesStore((s) => s.addFavorite);
  const removeFavorite = useFavoritesStore((s) => s.removeFavorite);
  const isFavorite = useFavoritesStore((s) => s.isFavorite);
  const setModalOpen = useFavoritesStore((s) => s.setModalOpen);

  useEffect(() => {
    fetch(`${baseUrl}homeImages.json`)
      .then((res) => res.json())
      .then((data) => {
        setHomeImages(Array.isArray(data) ? data : Object.values(data));
        setIsLoading(false); // ✅ Տվյալները բեռնված են
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (house: HomeImage) => {
    const id = house.id?.toString() ?? house.image;
    isFavorite(id) ? removeFavorite(id) : addFavorite(house);
    setModalOpen(!isFavorite(id));
  };

  const columns = layout === "layout1" ? 2 : 3;

  const visibleHomes = homeImages.filter((home) =>
    home.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div
      className="mt-[50px] px-[30px]"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gap: "40px",
        justifyItems: "center",
        width: "100%",
      }}
    >
      {isLoading
        ? Array.from({ length: columns * 2 }).map((_, i) => (
            <HouseCardSkeleton key={i} />
          ))
        : visibleHomes.map((img) => {
            const id = img.id?.toString() ?? img.image;
            const favorite = isFavorite(id);

            return (
              <div
                key={id}
                className={`rounded-[25px] shadow-md p-[10px] cursor-pointer transform transition hover:scale-[1.02] ${
                  favorite ? "bg-gray-100" : "bg-white"
                }`}
                style={{ width: "100%", maxWidth: "350px" }}
              >
                <div className="overflow-hidden rounded-[25px]">
                  <img
                    className="w-full h-auto rounded-[5px]"
                    src={`/housesImages/${img.image.replace("housesPhoto/", "")}`}
                    alt={img.title}
                    onError={(e) =>
                      (e.currentTarget.src = "/images/default.png")
                    }
                  />
                  <button
                    className="mt-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(img);
                    }}
                    aria-label={
                      favorite ? "Հեռացնել ընտրյալներից" : "Ավելացնել ընտրյալներին"
                    }
                  >
                    <img
                   
                  src={
                    favorite
                      ? "data:image/png;base64,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"
                      : "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTExLjk5IDIwLjI4bC0xLjQtMS4yYy00LjY3LTMuOTEtNy43LTYuNTItNy43LTkuMWE0LjkyIDQuOTIgMCAwIDEgMy4xLTQuNDQgNS4xOSA1LjE5IDAgMCAxIDMuOTQgMS4yIDUuMTkgNS4xOSAwIDAgMSAzLjk0LTEuMiA0LjkyIDQuOTIgMCAwIDEgMy4xIDQuNDQgMTIgMTIgMCAwIDEtNy43IDkuMSIgc3Ryb2tlPSJyZWQiIGZpbGw9Im5vbmUiLz48L3N2Zz4="
                  }
                      width={30}
                      height={30}
                      alt="Սրտիկ"
                    />
                  </button>
                  <div className="mt-2 ml-3">
                    <h2 className="font-bold text-lg">{img.title}</h2>
                    <p>{img.people} people</p>
                    <p className="ml-40 text-2xl">{img.prace}</p>
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  );
}

export default Houses;


