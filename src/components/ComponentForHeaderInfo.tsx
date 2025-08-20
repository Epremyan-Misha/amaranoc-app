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
    <div className="flex items-center gap-6 relative z-50">
      {infoForHeader.map((info, index) => (
        <h4
          key={info.id ?? index}
          className="text-xl -mt-4 cursor-pointer hover:border-b-2 border-orange-500 pb-1"
        >
          {info.title}
        </h4>
      ))}

      <Link
        to="/login"
        className="text-red-600 -mt-4 hover:border-b-2 border-red-500 pb-1"
      >
        Դուրս գալ
      </Link>

      <div
        className="relative cursor-pointer -mt-4"
        onClick={() => setModalOpen(!isModalOpen)}
      >
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTExLjk5IDIwLjI4bC0xLjQtMS4yYy00LjY3LTMuOTEtNy43LTYuNTItNy43LTkuMWE0LjkyIDQuOTIgMCAwIDEgMy4xLTQuNDQgNS4xOSA1LjE5IDAgMCAxIDMuOTQgMS4yIDUuMTkgNS4xOSAwIDAgMSAzLjk0LTEuMiA0LjkyIDQuOTIgMCAwIDEgMy4xIDQuNDQgMTIgMTIgMCAwIDEtNy43IDkuMSIgc3Ryb2tlPSJyZWQiIGZpbGw9Im5vbmUiLz48L3N2Zz4="
          alt="Favorites Icon"
          className="w-8 h-8"
        />

        {isModalOpen && (
          <div className="absolute right-0 mt-4 w-[400px] max-h-[500px] overflow-y-auto bg-white rounded-lg shadow-xl p-6 z-50 border border-gray-300">
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
