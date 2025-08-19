import { useState } from "react";
import LayoutComponent from "./ComponentLayout";
import Houses from "./ComponentHouses";

function AppLayoutManager({ searchValue }) {
  const [layout, setLayout] = useState("layout2");

  return (
    <>
      <LayoutComponent layout={layout} setLayout={setLayout} />
      <Houses layout={layout} searchValue={searchValue} />
    </>
  );
}


export default AppLayoutManager;
