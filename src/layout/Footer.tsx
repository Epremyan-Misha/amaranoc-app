import React from "react";
import "../index.css";
import Inputs from "../components/ComponentForInputsFooter";
import { InfoH1Footer, InfoPFooter } from "../components/InfoForFooter";

const footerBgStyle: React.CSSProperties = {
  backgroundImage: "url('/images/footer1.png')",
};

function Footer(): JSX.Element {
  return (
    <div
      className="h-[800px] bg-cover bg-no-repeat bg-center flex justify-center items-start pt-[300px]"
      style={footerBgStyle}
    >
      <div className="w-[85%] max-w-[1200px] h-[450px] bg-[rgba(30,30,30,0.85)] rounded-[25px] px-8 py-10 flex flex-col items-center">
        <InfoH1Footer />
        <InfoPFooter />
        <Inputs />
      </div>
    </div>
  );
}

export default Footer;
