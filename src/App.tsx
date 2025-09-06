// App.tsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Head from "./layout/Header";
import Body from "./layout/Body";
import Footer from "./layout/Footer";
import Login from "./Login";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "./authContext";

import HouseDetail from "./components/HouseDetail";
import Houses from "./components/ComponentHouses";

import Sales from "./components/pages/Sales";
import Services from "./components/pages/Services";
import AboutUs from "./components/pages/AboutUs";

const App: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <>
      <Head searchValue={searchValue} onSearchChange={handleSearchChange} />
      {children}
      <Footer />
    </>
  );

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <LayoutWrapper>
                  <Body searchValue={searchValue} />
                </LayoutWrapper>
              </ProtectedRoute>
            }
          />

          <Route
            path="/house/:id"
            element={
              <ProtectedRoute>
                <LayoutWrapper>
                  <HouseDetail key={window.location.pathname} />
                  <div className="mt-[250px] m-15">
                    <h1 className="flex items-center my-10 text-[25px] font-semibold">
  <span className="flex-grow border-t border-gray-400 mr-4"></span>
  Նման Առաջարկներ
  <span className="flex-grow border-t border-gray-400 ml-4"></span>
</h1>

                    <Houses />
                  </div>
                </LayoutWrapper>
              </ProtectedRoute>
            }
          />
          <Route
            path="/sales"
            element={
              <ProtectedRoute>
                <LayoutWrapper>
                  <Sales />
                </LayoutWrapper>
              </ProtectedRoute>
            }
          />
          <Route
            path="/services"
            element={
              <ProtectedRoute>
                <LayoutWrapper>
                  <Services />
                </LayoutWrapper>
              </ProtectedRoute>
            }
          />
          <Route
            path="/about-us"
            element={
              <ProtectedRoute>
                <LayoutWrapper>
                  <AboutUs />
                </LayoutWrapper>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
