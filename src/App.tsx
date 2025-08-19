// App.tsx

import React, { useState } from "react";
import Head from "./layout/Header";
import Body from "./layout/Body";
import Footer from "./layout/Footer";
import Login from "./Login";
import Register from "./Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./authContext";
import ProtectedRoute from "./ProtectedRoute";

const App: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

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
                <>
                  <Head searchValue={searchValue} onSearchChange={handleSearchChange} />
                  <Body searchValue={searchValue} />
                  <Footer />
                </>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
