import React, { useEffect, useState } from "react";
import "../index.css";
import { useFilterStore } from "../store/filterStore";

const baseUrl = "https://myproject-73982-default-rtdb.firebaseio.com/";

interface CourseItem {
  id: string;
  title: string;
}

function Course() {
  const [courses, setCourses] = useState<CourseItem[]>([]);
  const { currency, setCurrency } = useFilterStore();

  useEffect(() => {
    fetch(`${baseUrl}courses.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response not ok");
        return res.json();
      })
      .then((data) => setCourses(Array.isArray(data) ? data : Object.values(data)))
      .catch((err) => console.error("Error fetching courses:", err));
  }, []);

  return (
    <div className="flex justify-center items-center gap-3 p-[10px]">
  <h4 className="mt-3 mr-3">Արժեք</h4>
  {courses.map((info) => (
    <p
      key={info.id}
      onClick={() => setCurrency(info.title)}
      className={`cursor-pointer mt-2 min-w-[40px] h-[40px] border border-gainsboro-400 rounded-full flex items-center justify-center text-[15px] font-medium transition duration-500 hover:bg-[gainsboro] ${
        currency === info.title ? "bg-black text-white" : ""
      }`}
    >
      {info.title}
    </p>
  ))}
</div>

  );
}

export default Course;
