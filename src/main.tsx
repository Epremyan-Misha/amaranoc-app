import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "leaflet/dist/leaflet.css";        
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"; 
import "swiper/css";                // <-- ԱՎԵԼԱՑՐՈՒ
import "swiper/css/navigation";     // <-- ԱՎԵԼԱՑՐՈՒ
import "swiper/css/pagination";     // <-- ԱՎԵԼԱՑՐՈՒ
import App from "./App";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
