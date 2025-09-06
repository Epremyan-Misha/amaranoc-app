import React from "react";
import Houses from "../ComponentHouses";
const Sales: React.FC = () => {
  return (
    <div className="p-8 m-30">
      <div className="flex items-center justify-center gap-4">
        <div className="flex-1 border-t border-black-400 "></div>
        <h1 className="text-[40px] font-bold text-center text-gray-800">
          Հատուկ Զեղչեր
        </h1>
        <div className="flex-1 border-t border-gray-400"></div>
      </div>
      <div className="-ml-15 mt-10 flex">
        <img
          src="/pagesImages/sales1.png"
          className="w-[600px] h-[300px] object-cover rounded-lg shadow-md -ml-10 hover:h-[310px] transtion"
          alt="Sales"
        />
        <img
          src="/pagesImages/sales2.png"
          className="w-[600px] h-[300px] object-cover rounded-lg ml-15 shadow-md hover:h-[310px] transtion"
          alt="Sales"
        />
        <img
          src="/pagesImages/sales3.png"
          className="w-[600px] h-[300px] object-cover rounded-lg ml-25 shadow-md hover:h-[310px] transtion"
          alt="Sales"
        />
      </div>
      <div className="flex mt-10 gap-6">
  <div className="bg-gray-50 rounded-lg shadow-md p-6 w-[900px] h-[400px] hover:h-[410px] transtion">
    <h1 className="font-bold text-[32px] mb-4 mt-5 uppercase border-b-2 border-orange-500">
      ՊԱՏՎԻՐԻ՛Ր{" "}
      <span className="text-orange-500 ">ՆՎԵՐ ՔԱՐՏ</span> ՔՈ ԿԱՄ ԸՆԿԵՐՆԵՐԻԴ ՀԱՄԱՐ
    </h1>
    <p className="text-gray-700 leading-relaxed mt-20">
      Բաց մի թող մեր բացառիկ զեղչի քարտերը։ Եթե պլանավորում ես քո հաջորդ
      արձակուրդը՝ ընկերներիդ կամ ընտանիքիդ անդամների հետ, մեր զեղչային քարտերը
      առաջարկում են անգերազանցելի խնայողություններ ամառանոցների և ծառայությունների լայն
      տեսականիով: Ընտրիր զեղչի չափը քարտի վրա։
    </p>
  </div>

  <div className="ml-[200px] bg-orange-500 w-[1000px] h-[400px] rounded-lg shadow-md flex flex-col items-center justify-center gap-10 hover:h-[410px] transtion">
   <img src="/pagesImages/orangeLogo.png" className="w-[500px] h-[100px]" />

    <div className="flex gap-6">
      <p className="px-6 py-3 border-2 border-white rounded-full text-white font-bold cursor-pointer transition hover:bg-white hover:text-orange-500">
        50,000Դ
      </p>
      <p className="px-6 py-3 border-2 border-white rounded-full text-white font-bold cursor-pointer transition hover:bg-white hover:text-orange-500">
        60,000Դ
      </p>
      <p className="px-6 py-3 border-2 border-white rounded-full text-white font-bold cursor-pointer transition hover:bg-white hover:text-orange-500">
        70,000Դ
      </p>
    </div>

    <div className="flex gap-6">
      <p className="px-6 py-3 border-2 border-white rounded-full text-white font-bold cursor-pointer transition hover:bg-white hover:text-orange-500">
        80,000Դ
      </p>
      <p className="px-6 py-3 border-2 border-white rounded-full text-white font-bold cursor-pointer transition hover:bg-white hover:text-orange-500">
        90,000Դ
      </p>
      <p className="px-6 py-3 border-2 border-white rounded-full text-white font-bold cursor-pointer transition hover:bg-white hover:text-orange-500">
        100,000Դ
      </p>
    </div>
    <p className="px-6 py-3 border-2 border-white rounded-full text-white font-bold cursor-pointer transition hover:bg-white hover:text-orange-500">Պատվիրել</p>
  </div>
    </div>
     <div className="">
        <h1 className="text-[40px] font-bold text-center text-gray-800 mt-15">
          ԹԵԺ ԱՌԱՋԱՐԿՆԵՐ
        </h1>
        <div className="mt-15">
            <Houses/>
        </div>
    </div>
    </div>
  );
};

export default Sales;
