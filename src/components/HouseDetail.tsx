import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { housesData } from "../data.js";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function HouseDetail() {
  const { id } = useParams<{ id: string }>();
  const [house, setHouse] = useState(() =>
    housesData.find((h) => h.id?.toString() === id)
  );

  useEffect(() => {
    const foundHouse = housesData.find((h) => h.id?.toString() === id);
    setHouse(foundHouse);
  }, [id]);

  const [selectedCurrency, setSelectedCurrency] = useState<"USD" | "AMD" | "EUR" | "RUB">("AMD");

  if (!house)
    return (
      <p className="text-center mt-10 text-xl text-red-500">Տունը չի գտնվել</p>
    );

  const getImagePath = (filename: string) => filename;

  const houseCoordinates: Record<number, [number, number]> = {
    1: [40.5326, 44.7116],
    2: [40.3763, 44.5734],
    3: [40.1776, 44.5126],
    4: [40.7411, 44.8645],
    5: [40.535, 44.712],
    6: [40.4, 44.85],
    7: [40.12, 44.73],
    8: [40.377, 44.574],
    9: [40.07, 44.4],
    10: [40.5, 44.77],
    11: [40.378, 44.575],
    12: [40.536, 44.713],
    13: [40.379, 44.576],
    14: [40.178, 44.513],
  };

  const position = houseCoordinates[house.id] || [40.1776, 44.5126];

  const basePrice = Number(house.prace.replace(/[^0-9]/g, "")) || 0;

  const currencyRates = { USD: 1 / 260, AMD: 1, EUR: 0.93 / 260, RUB: 95 / 260 };
  const currencySymbols: Record<string, string> = { USD: "USD", AMD: "Դ", EUR: "EUR", RUB: "RUB" };
  const convertedPrice = (basePrice * (currencyRates[selectedCurrency] || 1)).toLocaleString();

  const currencyButtons = ["USD", "AMD", "RUB", "EUR"];

  return (
    <div className="max-w-6xl mx-auto p-5">
      <div className="flex mt-15 -ml-25 border border-gray-400 rounded-xl p-5 w-[1400px]">
        <img src="/images/location.png" className="w-[50px] h-[50px] mt-3" />
        <p className="text-2xl font-semibold mt-5 ml-5">{house.title}</p>

        <div className="ml-[550px]">
          <p className="text-xl font-bold text-orange-400 mt-5 w-[200px]">
            Արժեք: {convertedPrice} {currencySymbols[selectedCurrency]}
          </p>
        </div>

        <div className="flex ml-[200px] gap-5 mt-3">
          {currencyButtons.map((cur) => (
            <p
              key={cur}
              className={`cursor-pointer mt-2 min-w-[40px] h-[40px] border border-gainsboro-400 rounded-full flex items-center justify-center text-[15px] font-medium transition duration-500 hover:bg-gray-200 ${
                selectedCurrency === cur ? "bg-orange-400 text-white" : ""
              }`}
              onClick={() => setSelectedCurrency(cur as keyof typeof currencyRates)}
            >
              {cur}
            </p>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 mt-10">
        <div className="md:col-span-2">
          <img
            src={getImagePath(house.image)}
            alt={house.title}
            className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
          />
        </div>
        <div className="flex flex-col gap-4">
          {house.sliderImages?.slice(0, 2).map((img, i) => (
            <img
              key={i}
              src={getImagePath(img)}
              alt={`${house.title} ${i + 1}`}
              className="w-full h-[250px] object-cover rounded-2xl shadow-md"
            />
          ))}
        </div>
      </div>

      <div className="bg-white shadow-md rounded-xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <p className="text-lg font-medium text-gray-700">
            Մարդիկ: <span className="font-bold">{house.people}</span>
          </p>
          <p className="text-lg font-medium text-gray-700">
            Սենյակներ: <span className="font-bold">{house.rooms || 1}</span>
          </p>
        </div>
      </div>

      <div className="w-full h-[500px] bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200 mb-6">
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="w-full h-full">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              <div className="text-center">
                <img
                  src={getImagePath(house.image)}
                  alt={house.title}
                  className="w-32 h-20 object-cover rounded-lg mb-2"
                />
                <p className="font-semibold">{house.title}</p>
                <p className="text-green-600 font-bold">{convertedPrice} {currencySymbols[selectedCurrency]}</p>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-4 h-[500px]">
        <DatePicker
          selected={new Date()}
          onChange={() => {}}
          inline
          calendarClassName="w-full h-full rounded-xl overflow-hidden border border-gray-300 shadow-inner"
          dayClassName={(date) =>
            "text-gray-700 hover:bg-orange-100 rounded-full transition-colors duration-200"
          }
        />
      </div>
    </div>
  );
}

export default HouseDetail;
