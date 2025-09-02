function LayoutComponent({ layout, setLayout }) {
  return (
    <div className="-mt-[200px] flex items-center justify-between border-b border-gray-100 pb-3">
      <h1 className=" w-[300px] ml-[30px] text-2xl text-black-700">Լավագույն Առաջարկներ</h1>

      <div className="flex mr-[100px]">
        <div
          className="cursor-pointer"
          onClick={() => setLayout("layout1")}
        >
          <img
            className="w-10 h-10"
            src={
              layout === "layout1"
                ? "images/layout1black.png"
                : "images/layout1.png"
            }
            alt="Layout 1"
          />
        </div>

        <div
          className="cursor-pointer ml-5"
          onClick={() => setLayout("layout2")}
        >
          <img
            className="w-10 h-10"
            src={
              layout === "layout2"
                ? "images/layout2.png"
                : "images/layout2white.png"
            }
            alt="Layout 2"
          />
        </div>
      </div>
    </div>
  );
}

export default LayoutComponent;
