import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import DatePicker from "react-datepicker";
import "leaflet/dist/leaflet.css";
import "react-datepicker/dist/react-datepicker.css";

function MapAndDate() {
  const [showMap, setShowMap] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".map-popover") && !target.closest(".map-icon")) {
        setShowMap(false);
      }
      if (!target.closest(".date-popover") && !target.closest(".date-icon")) {
        setShowDate(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex gap-6 mt-35 ml-10">
      <div className="relative">
        <FaMapMarkerAlt
          className="map-icon text-black text-3xl cursor-pointer hover:scale-110 transition"
          onClick={() => setShowMap(!showMap)}
        />
        {showMap && (
          <div className="map-popover absolute top-10 left-0 w-[500px] h-[350px] bg-white shadow-lg border rounded-xl overflow-hidden z-50">
            <MapContainer
              center={[40.1776, 44.5126]}
              zoom={13}
              scrollWheelZoom={false}
              className="w-full h-full"
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[40.1776, 44.5126]}>
                <Popup>Էստեղ կլինի քո տունը 🏠</Popup>
              </Marker>
            </MapContainer>
          </div>
        )}
      </div>

      <div className="relative">
        <FaCalendarAlt
          className="date-icon text-black text-3xl cursor-pointer hover:scale-110 transition"
          onClick={() => setShowDate(!showDate)}
        />
        {showDate && (
          <div className="date-popover absolute top-10 left-0">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
             
              open 
              onClickOutside={() => setShowDate(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default MapAndDate;
