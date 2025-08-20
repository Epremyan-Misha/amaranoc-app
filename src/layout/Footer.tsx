import React from "react";
import "../index.css";
import Inputs from "../components/ComponentForInputsFooter";
import { InfoH1Footer, InfoPFooter } from "../components/InfoForFooter";

const footerBgStyle: React.CSSProperties = {
  backgroundImage: "url('/images/footer1.png')",
};

function Footer(): JSX.Element {
  return (
    <footer
      className="bg-cover bg-no-repeat bg-center flex justify-center items-start pt-[150px] min-h-[800px] transition-all duration-700"
      style={footerBgStyle}
    >
      <div
        className="w-[90%] max-w-[1200px] h-auto bg-[rgba(20,20,20,0.85)] rounded-[30px] px-10 py-12 flex flex-col items-center shadow-2xl backdrop-blur-md"
      >
        <InfoH1Footer />
        <div className="mt-4 mb-6 text-center">
          <InfoPFooter />
        </div>
        <div className="w-full max-w-[600px]">
          <Inputs />
        </div>
        <div className="mt-10 text-gray-400 text-sm opacity-80">
          © {new Date().getFullYear()} Amaranoc.am — Բոլոր իրավունքները պաշտպանված են
        </div>
      </div>
    </footer>
  );
}

export default Footer;
