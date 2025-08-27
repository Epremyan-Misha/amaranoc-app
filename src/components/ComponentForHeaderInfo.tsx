import React, { useEffect, useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { useFavoritesStore } from "../store/useFavoritesStore";

const baseUrl = "https://myproject-73982-default-rtdb.firebaseio.com/";

function HeaderInfo() {
  const [infoForHeader, setInfoForHeader] = useState<
    { id?: string; title: string }[]
  >([]);

  const favorites = useFavoritesStore((state) => state.favorites);
  const removeFavorite = useFavoritesStore((state) => state.removeFavorite);
  const isModalOpen = useFavoritesStore((state) => state.isModalOpen);
  const setModalOpen = useFavoritesStore((state) => state.setModalOpen);

  useEffect(() => {
    fetch(`${baseUrl}infoForHeader.json`)
      .then((res) => res.json())
      .then((infoData) => {
        if (!infoData) {
          setInfoForHeader([]);
        } else if (Array.isArray(infoData)) {
          setInfoForHeader(infoData);
        } else {
          setInfoForHeader(Object.values(infoData));
        }
      })
      .catch((err) => console.error("Error fetching header info:", err));
  }, []);

  return (
    <div className="flex items-center justify-end gap-8 relative z-50 h-[60px]">
      <div className="flex items-center gap-16">
        {infoForHeader.map((info, index) => (
          <h4
            key={info.id ?? index}
            className="text-lg cursor-pointer hover:border-b-2 border-orange-500 pb-1 transition"
          >
            {info.title}
          </h4>
        ))}

        <Link
          to="/login"
          className="text-red-600 hover:border-b-2 border-red-500 pb-1 transition"
        >
          Դուրս գալ
        </Link>
      </div>

      <div
        className="relative cursor-pointer flex items-center"
        onClick={() => setModalOpen(!isModalOpen)}
      >
        <img
          src="/images/heart1.png"
          alt="Favorites Icon"
          className="w-7 h-7"
        />

        {isModalOpen && (
          <div className="absolute right-0 top-10 w-[400px] max-h-[500px] overflow-y-auto bg-white rounded-lg shadow-xl p-6 z-50 border border-gray-300">
            <h3 className="text-lg font-semibold mb-4">Ընտրյալներ</h3>

            {favorites.length > 0 ? (
              <ul className="space-y-4">
                {favorites.map((fav) => (
                  <li
                    key={fav.id}
                    className="flex items-center gap-4 border-b pb-3"
                  >
                    <img
                      src={`/housesImages/${fav.image.replace("housesPhoto/", "")}`}
                      alt={fav.title}
                      className="w-16 h-16 object-cover rounded-md"
                      onError={(e) => {
                        e.currentTarget.src = "/images/default.png";
                      }}
                    />
                    <div className="flex-1">
                      <h4 className="font-medium">{fav.title}</h4>
                    </div>
                    <button
                      className="text-red-500 text-sm hover:underline"
                      onClick={() => removeFavorite(fav.id)}
                    >
                      Հեռացնել
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">Դատարկ է</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default HeaderInfo;
