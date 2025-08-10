import React, { useEffect, useState } from "react";
import "../index.css";

const baseUrl = "https://myproject-73982-default-rtdb.firebaseio.com/";

interface CourseItem {
  id: string;
  title: string;
}

function Course() {
  const [courses, setCourses] = useState<CourseItem[]>([]);

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
    <div className="flex ml-[5px] p-[10px]">
      <h4>Արժեք</h4>
      {courses.map((info) => (
        <p
          key={info.id}
          className="cursor-pointer w-[50px] m-[10px] h-[30px] border border-black rounded-[45px] text-center ml-[10px] transition duration-1000 hover:bg-[gainsboro]"
        >
          {info.title}
        </p>
      ))}
    </div>
  );
}

export default Course;
