import React, { useEffect, useState } from "react";
import "../index.css";
import { useFavoritesStore } from "../store/useFavoritesStore";
import { useFilterStore } from "../store/filterStore";
import { useHousesStore } from "../store/useHousesStore";
import HouseCardSkeleton from "../components/skeletons/HouseCardSkeleton";

const baseUrl = "https://myproject-73982-default-rtdb.firebaseio.com/";

interface HousesProps {
  layout: "layout1" | "layout2";
  searchValue: string;
}

function Houses({ layout, searchValue }: HousesProps) {
  const {
    homeImages,
    isLoading,
    isFiltering,
    setHomeImages,
    setIsLoading,
    setIsFiltering,
  } = useHousesStore();

  const addFavorite = useFavoritesStore((s) => s.addFavorite);
  const removeFavorite = useFavoritesStore((s) => s.removeFavorite);
  const isFavorite = useFavoritesStore((s) => s.isFavorite);
  const setModalOpen = useFavoritesStore((s) => s.setModalOpen);

  const {
    minPrice,
    maxPrice,
    currency,
    peopleCount,
    nightStay,
    roomsCount,
    poolType,
    region,
  } = useFilterStore();

  const poolTypes = ["Բաց", "Փակ", "Տաքացվող", "Առանց լողավազան"];

  const [selectedHouseId, setSelectedHouseId] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${baseUrl}homeImages.json`)
      .then((res) => res.json())
      .then((data) => {
        const homes = Array.isArray(data) ? data : Object.values(data);

        const normalizedHomes = homes.map((h: any) => {
          return {
            ...h,
            nightStay: h.night === true,
            rooms:
              h.rooms && Number(h.rooms) > 0
                ? Number(h.rooms)
                : Math.floor(Math.random() * 5) + 1,
            poolType:
              h.poolType && poolTypes.includes(h.poolType)
                ? h.poolType
                : poolTypes[Math.floor(Math.random() * poolTypes.length)],
          };
        });

        setHomeImages(normalizedHomes);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, [setHomeImages, setIsLoading]);

  useEffect(() => {
    if (!isLoading) {
      setIsFiltering(true);
      const t = setTimeout(() => setIsFiltering(false), 400);
      return () => clearTimeout(t);
    }
  }, [
    searchValue,
    minPrice,
    maxPrice,
    currency,
    peopleCount,
    nightStay,
    roomsCount,
    poolType,
    region,
    isLoading,
    setIsFiltering,
  ]);

  const parsePrice = (prace: string) => {
    const match = prace.match(/([\d\s,._]+)\s*([Դ֏$€₽]?)/);
    if (!match) return { price: 0, curr: "" };
    const price = parseInt(match[1].replace(/[\s,._]/g, ""), 10);
    const curr = match[2] || "";
    return { price, curr };
  };

  const getRegionFromImage = (image: string) => {
    if (!image) return "";
    const lower = image.toLowerCase();
    if (lower.includes("dilijan")) return "Դիլիջան 1";
    if (lower.includes("caxkadzor")) return "Ծաղկաձոր 4";
    if (lower.includes("ohanavan")) return "Օհանավան";
    if (lower.includes("erevan")) return "Երևան";
    if (lower.includes("arzni")) return "Արզնի";
    if (lower.includes("hrazdan")) return "Հրազդան";
    if (lower.includes("garni")) return "Գառնի";
    if (lower.includes("mrgashen")) return "Մրգաշեն";
    if (lower.includes("draxtik")) return "Դրախտիկ";
    return "";
  };

  let visibleHomes = homeImages
    .filter((home) =>
      home.title?.toLowerCase().includes(searchValue.toLowerCase())
    )
    .filter((home) => {
      const { price, curr } = parsePrice(home.prace);

      if (minPrice !== null && price < minPrice) return false;
      if (maxPrice !== null && price > maxPrice) return false;
      if (currency === "Դ" && curr !== "Դ") return false;

      const homePeople = parseInt(
        home.people.toString().replace("people-", ""),
        10
      );
      if (peopleCount > 0 && homePeople < peopleCount) return false;

      if (nightStay === "yes" && home.nightStay !== true) return false;
      if (nightStay === "no" && home.nightStay !== false) return false;

      if (roomsCount > 0 && home.rooms < roomsCount) return false;

      if (poolType && poolType !== "Բոլորը" && home.poolType !== poolType)
        return false;

      if (region && region !== "" && region !== "Բոլորը") {
        const houseRegion = getRegionFromImage(home.image);
        if (houseRegion !== region) return false;
      }

      return true;
    });

  if (selectedHouseId) {
    visibleHomes = visibleHomes.filter(
      (h) => h.id?.toString() === selectedHouseId
    );
  }

  const showSkeleton = isLoading || isFiltering;
  const columns = layout === "layout1" ? 2 : 3;

  return (
    <div className="-mt-5 px-[30px] w-full">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          gap: "40px",
          justifyItems: "center",
          width: "100%",
        }}
      >
        {showSkeleton
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
                  onClick={() => {
                    if (selectedHouseId === id) {
                      setSelectedHouseId(null);
                    } else {
                      setSelectedHouseId(id);
                    }
                  }}
                >
                  <div className="overflow-hidden rounded-[25px] w-full">
                    <img
                      className="w-full h-64 object-cover rounded-[5px]"
                      src={`/housesImages/${img.image.replace(
                        "housesPhoto/",
                        ""
                      )}`}
                      alt={img.title}
                      onError={(e) =>
                        (e.currentTarget.src = "/images/default.png")
                      }
                    />

                    <div className="mt-2 ml-3 flex items-center justify-between">
                      <div>
                        <h2 className="font-bold text-lg">{img.title}</h2>
                        <p>{img.people} people</p>
                        <p>{img.rooms} սենյակ</p>
                        <p className="mt-3 text-2xl">{img.prace}</p>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (favorite) {
                            removeFavorite(id);
                          } else {
                            addFavorite({
                              id,
                              title: img.title,
                              image: img.image,
                            });
                          }
                          setModalOpen(!favorite);
                        }}
                        className="ml-3"
                      >
                        <img
                          key={favorite ? "red" : "gray"}
                          src={
                            favorite
                              ? "/images/heart.png"
                              : "/images/heart1.png"
                          }
                          alt="favorite"
                          className="w-7 h-7"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default Houses;
