import React, { useState } from "react";
import LayoutComponent from "./ComponentLayout";
import Houses from "./ComponentHouses";
import { housesData } from "../data.js";

function AppLayoutManager({ searchValue }: { searchValue: string }) {
  const [layout, setLayout] = useState<"layout1" | "layout2">("layout2");

  return (
    <>
      <LayoutComponent layout={layout} setLayout={setLayout} />
      <Houses layout={layout} searchValue={searchValue} initialData={housesData} />
    </>
  );
}

export default AppLayoutManager;
