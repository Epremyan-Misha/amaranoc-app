import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { housesData } from "../data.js";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function HouseDetail() {
  const { id } = useParams<{ id: string }>();
  const [house, setHouse] = useState(() => housesData.find(h => h.id?.toString() === id));

  useEffect(() => {
    const foundHouse = housesData.find(h => h.id?.toString() === id);
    setHouse(foundHouse);
  }, [id]);

  if (!house)
    return (
      <p className="text-center mt-10 text-xl text-red-500">Տունը չի գտնվել</p>
    );

  const getImagePath = (filename: string) => `/${filename}`;

  const houseCoordinates: Record<number, [number, number]> = {
    1: [40.5326, 44.7116], 2: [40.3763, 44.5734], 3: [40.1776, 44.5126],
    4: [40.7411, 44.8645], 5: [40.535, 44.712], 6: [40.4, 44.85],
    7: [40.12, 44.73], 8: [40.377, 44.574], 9: [40.07, 44.4],
    10: [40.5, 44.77], 11: [40.378, 44.575], 12: [40.536, 44.713],
    13: [40.379, 44.576], 14: [40.178, 44.513],
  };

  const position = houseCoordinates[house.id] || [40.1776, 44.5126];

  const basePrice = Number(house.prace.replace(/[^0-9]/g, "")) || 0;
  const currencyRates = { USD: 1, AMD: 260 };
  const [selectedCurrency, setSelectedCurrency] = useState<keyof typeof currencyRates>("USD");
  const convertedPrice = (selectedCurrency === "USD" ? basePrice : basePrice * currencyRates[selectedCurrency]).toLocaleString();

  return (
    <div className="max-w-6xl mx-auto p-5">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="md:col-span-2">
          <img
            src={getImagePath(house.image)}
            alt={house.title}
            className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
          />
          <p className="text-2xl font-semibold text-center mt-3">{house.title}</p>
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
          <p className="text-xl font-bold text-green-600 mt-2">
            Գին: {convertedPrice} {selectedCurrency}
          </p>
          <div className="flex gap-4 mt-2">
            {Object.keys(currencyRates).map((cur) => (
              <button
                key={cur}
                className={`px-3 py-1 rounded-full border ${
                  selectedCurrency === cur
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => setSelectedCurrency(cur as keyof typeof currencyRates)}
              >
                {cur}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="w-full h-[500px] bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200">
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
                  <p className="text-green-600 font-bold">{convertedPrice} {selectedCurrency}</p>
                </div>
              </Popup>
            </Marker>
            {housesData.filter(h => h.id !== house.id).map((h) => {
              const pos = houseCoordinates[h.id] || position;
              const price = (selectedCurrency === "USD" ? Number(h.prace.replace(/[^0-9]/g, "")) : Number(h.prace.replace(/[^0-9]/g, "")) * currencyRates[selectedCurrency]).toLocaleString();
              return (
                <Marker key={h.id} position={pos}>
                  <Popup>
                    <div className="text-center">
                      <img
                        src={getImagePath(h.image)}
                        alt={h.title}
                        className="w-32 h-20 object-cover rounded-lg mb-2"
                      />
                      <p className="font-semibold">{h.title}</p>
                      <p className="text-green-600 font-bold">{price} {selectedCurrency}</p>
                    </div>
                  </Popup>
                </Marker>
              )
            })}
          </MapContainer>
        </div>
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-4 h-[500px]">
          <DatePicker
            selected={new Date()}
            onChange={() => {}}
            inline
            calendarClassName="w-full h-full rounded-xl overflow-hidden"
            dayClassName={(date) =>
              "text-gray-700 hover:bg-green-100 rounded-full transition-colors duration-200"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default HouseDetail;
