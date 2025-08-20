import React from "react";
import "../index.css";

export function InfoH1Footer(): JSX.Element {
  return (
    <h1 className="text-white text-3xl sm:text-4xl font-bold text-center mb-4 tracking-wide">
      📢 Տեղադրել Հայտարարություն
    </h1>
  );
}

export function InfoPFooter(): JSX.Element {
  return (
    <p className="text-white text-lg sm:text-xl text-center opacity-90 max-w-[600px] mx-auto mb-8">
      Մուտքագրեք Ձեր տվյալները նշված դաշտերում և մենք կկապնվենք Ձեզ հետ
    </p>
  );
}
