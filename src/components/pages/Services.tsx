import React, { useState } from "react";
import {
  infoForServicesSpasarkum,
  infoForServicesShou,
  infoForServicesMijocarumner,
} from "../../data";

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "spasarkum" | "shou" | "mijocarumner"
  >("spasarkum");

  const servicesData =
    activeTab === "spasarkum"
      ? infoForServicesSpasarkum
      : activeTab === "shou"
      ? infoForServicesShou
      : infoForServicesMijocarumner;

  return (
    <div className="py-20 bg-gray-50">
      <div className="flex justify-center gap-12 mb-12">
        <div className="mt-5 text-center">
          <img
            src="/servicesImages/icon1.png"
            className={`w-16 h-16 cursor-pointer transition-transform hover:scale-110 ${
              activeTab === "spasarkum"
                ? "border-b-2 border-orange-400"
                : "border-b-2 border-transparent"
            }`}
            onClick={() => setActiveTab("spasarkum")}
          />
          <h1
            className={`mt-2 cursor-pointer transition-transform hover:scale-110 ${
              activeTab === "spasarkum"
                ? "border-b-2 border-orange-400"
                : "border-b-2 border-transparent"
            }`}
            onClick={() => setActiveTab("spasarkum")}
          >
            Սպասարկում
          </h1>
        </div>
        <div className="mt-5 text-center">
          <img
            src="/servicesImages/icon2.png"
            className={`w-16 h-16 cursor-pointer transition-transform hover:scale-110 ${
              activeTab === "shou"
                ? "border-b-2 border-orange-400"
                : "border-b-2 border-transparent"
            }`}
            onClick={() => setActiveTab("shou")}
          />
          <h1
            className={`mt-2 cursor-pointer transition-transform hover:scale-110 ${
              activeTab === "shou"
                ? "border-b-2 border-orange-400"
                : "border-b-2 border-transparent"
            }`}
            onClick={() => setActiveTab("shou")}
          >
            Շոու
          </h1>
        </div>
        <div className="mt-5 text-center">
          <img
            src="/servicesImages/icon3.png"
            className={`w-16 h-16 cursor-pointer transition-transform hover:scale-110 ${
              activeTab === "mijocarumner"
                ? "border-b-2 border-orange-400"
                : "border-b-2 border-transparent"
            }`}
            onClick={() => setActiveTab("mijocarumner")}
          />
          <h1
            className={`mt-2 cursor-pointer transition-transform hover:scale-110 ${
              activeTab === "mijocarumner"
                ? "border-b-2 border-orange-400"
                : "border-b-2 border-transparent"
            }`}
            onClick={() => setActiveTab("mijocarumner")}
          >
            Միջոցառումներ
          </h1>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg w-120 p-6 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-142 h-52 object-cover mb-4"
            />
            <h3 className="text-xl font-bold mb-2 uppercase">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">{service.name}</p>
            <div className="flex items-center justify-between w-full mt-6">
              <p className="text-orange-500 text-[24px] font-semibold">
                {service.prace}
              </p>
              <button className="border-orange-400 rounded-xl border px-4 py-2 cursor-pointer hover:bg-orange-400 hover:text-white transition">
                Ամրագրել
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
