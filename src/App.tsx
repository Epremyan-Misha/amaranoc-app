import React from "react";
import Head from "./layout/Header";
import Body from "./layout/Body";
import Footer from "./layout/Footer";
import Login from "./Login";
import Register from "./Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./authContext";
import ProtectedRoute from "./ProtectedRoute";

const App: React.FC = () => {
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
                  <Head />
                  <Body />
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
