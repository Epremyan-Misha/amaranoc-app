import React, { useEffect, useState } from "react";
import "../index.css";
import ProductCard from "./ProductCards";

const baseUrl = "https://myproject-73982-default-rtdb.firebaseio.com/";

interface Product {
  title: string;
  image: string;
}

function Options(): JSX.Element {
  const [productsImg, setProductsImg] = useState<Product[]>([]);

  useEffect(() => {
    fetch(`${baseUrl}productsImg.json`)
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch productsImg");
        return res.json();
      })
      .then(data => {
        const formatted = Array.isArray(data) ? data : Object.values(data);
        console.log("✅ productsImg:", formatted);
        const cleaned = formatted.map((item: Product) => ({
          title: item.title,
          image: item.image?.trim(),
        }));

        setProductsImg(cleaned);
      })
      .catch(err => console.error("Error fetching productsImg:", err));
  }, []);

  return (
   <div className="flex ml-[350px] w-[1050px] h-[120px] mt-[50px] border-b border-b-[1px] border-b-[rgb(196,193,193)] border-t border-t-[1px] border-t-[rgb(196,192,192)]">
  <div className="cursor-pointer ml-[15px] mt-[15px] group">
    <img className="ml-[25px]" src="/imagesForOptions/nkar1.png" alt="Առանձնատներ" />
    <p className="border-b-[3px] border-orange-500 w-fit mx-auto">
      Առանձնատներ
    </p>
  </div>
  <div className="cursor-pointer ml-[45px] mt-[20px] group">
    <img className="ml-[25px]" src="/imagesForOptions/nkar2.png" alt="Frame Houses" />
    <p className="border-b-[3px] border-transparent group-hover:border-orange-500 w-fit mx-auto">
      Frame Houses
    </p>
  </div>

  <div className="cursor-pointer ml-[45px] mt-[20px] group">
    <img className="ml-[25px]" src="/imagesForOptions/nkar3.png" alt="Տնակներ" />
    <p className="border-b-[3px] border-transparent group-hover:border-orange-500 w-fit mx-auto">
      Տնակներ
    </p>
  </div>

  <div className="cursor-pointer ml-[55px] mt-[20px] group">
    <img className="ml-[25px]" src="/imagesForOptions/nkar4.png" alt="Փակ լողավազան" />
    <p className="border-b-[3px] border-transparent group-hover:border-orange-500 w-fit mx-auto">
      Փակ լողավազան
    </p>
  </div>

  <div className="cursor-pointer ml-[55px] mt-[12px] group">
    <img className="ml-[25px]" src="/imagesForOptions/nkar5.png" alt="Աղմուկից հեռու" />
    <p className="border-b-[3px] border-transparent group-hover:border-orange-500 w-fit mx-auto">
      Աղմուկից հեռու
    </p>
  </div>

  <div className="cursor-pointer ml-[55px] mt-[12px] group">
    <img className="ml-[25px]" src="/imagesForOptions/nkar6.png" alt="Շքեղ տեսարան" />
    <p className="border-b-[3px] border-transparent group-hover:border-orange-500 w-fit mx-auto">
      Շքեղ տեսարան
    </p>
  </div>
</div>

  );
}

export default Options;
