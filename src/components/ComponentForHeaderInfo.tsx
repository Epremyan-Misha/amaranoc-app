import React, { useEffect, useState } from "react";
import '../index.css';
import { Link } from "react-router-dom";

const baseUrl = "https://myproject-73982-default-rtdb.firebaseio.com/";

function HeaderInfo() {
  const [infoForHeader, setInfoForHeader] = useState([]);
  const [imgForHeader, setImgForHeader] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetch(`${baseUrl}infoForHeader.json`).then(res => {
        if (!res.ok) throw new Error("Network response not ok");
        return res.json();
      }),
      fetch(`${baseUrl}imgForHeader.json`).then(res => {
        if (!res.ok) throw new Error("Network response not ok");
        return res.json();
      })
    ])
      .then(([infoData, imgData]) => {
        setInfoForHeader(Array.isArray(infoData) ? infoData : Object.values(infoData));
        setImgForHeader(Array.isArray(imgData) ? imgData : Object.values(imgData));
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching data:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Բեռնվում է...</p>;
  if (error) return <p>Սխալ՝ {error}</p>;

  return (
    <>
      {infoForHeader.map((info, index) => (
        <h4
          key={info.id ?? index}
          className="text-xl mt-8 -ml-7 cursor-pointer hover:border-b-2 border-b-orange-500 h-7.5"
        >
          {info.title}
        </h4>
      ))}

      <Link
        to="/login"
        className="text-red-600 mt-8 hover:border-b-2 border-b-red-500 h-7.5"
      >
        Դուրս գալ
      </Link>

      {imgForHeader.map((img, index) => (
        <img
          key={img.id ?? index}
          className="w-8 h-8 mt-6 -ml-10 cursor-pointer"
          src={img.img || 'fallback-images.png'}
          alt={img.alt || "icon"}
        />
      ))}
    </>
  );
}

export default HeaderInfo;
