
function LayoutComponent({ layout, setLayout }) {
  return (
    <div className="mt-[20px] -ml-[100px] flex">
      <h1 className="text-2xl w-[300px] ml-[100px]">Լավագույն Առաջարկներ</h1>
      <div className="flex ml-[600px]">
        <div
          className="cursor-pointer"
          onClick={() => setLayout("layout1")}
        >
          <img
            className="w-10 h-10"
            src={layout === "layout1" ? "images/layout1black.png" : "images/layout1.png"}
            alt="Layout 1"
          />
        </div>

        <div
          className="cursor-pointer ml-5"
          onClick={() => setLayout("layout2")}
        >
          <img
            className="w-10 h-10"
            src={layout === "layout2" ? "images/layout2.png" : "images/layout2white.png"}
            alt="Layout 2"
          />
        </div>
      </div>
    </div>
  );
}

export default LayoutComponent;
