import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { housesData } from "../data";
import "leaflet/dist/leaflet.css";

function MapWithHouses() {
  const [showMap, setShowMap] = useState(false);
  const defaultLat = 40.1776;
  const defaultLng = 44.5126;

  return (
    <div className="relative flex flex-col gap-2 mt-30">
      <button
        onClick={() => setShowMap(!showMap)}
        className="px-4 py-2 bg-black text-white rounded-lg"
      >
        Քարտեզ
      </button>

      {showMap && (
        <div className="absolute top-12 left-0 w-[500px] h-[350px] bg-white border border-gray-300 rounded-xl shadow-lg overflow-auto z-50">
          <MapContainer
            center={[defaultLat, defaultLng]}
            zoom={12}
            scrollWheelZoom={false}
            className="w-full h-full"
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {housesData.map((house, index) => {
              const lat = defaultLat + (index * 0.005); // նուրբ տարբերակ demo-ի համար
              const lng = defaultLng + (index * 0.005);
              return (
                <Marker key={house.id} position={[lat, lng]}>
                  <Popup className="flex flex-col items-center">
                    <img
                      src={house.image}
                      alt={house.title}
                      className="w-24 h-16 mb-1 rounded"
                    />
                    <span className="font-medium">{house.title}</span>
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
        </div>
      )}
    </div>
  );
}

export default MapWithHouses;
