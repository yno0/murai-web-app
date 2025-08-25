import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import ClientLayout from "./layouts/ClientLayout";
import SupervisorLayout from "./layouts/SupervisorLayout";
import ForgotPassword from "./pages/auth/ForgotPass";
import UserLogin from "./pages/auth/UserLogin";
import Register from "./pages/auth/Register";
import LandingPage from "./pages/landing/LandingPage";
import AdminLogin from "./pages/auth/adminLogin";
export function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" />


        {/* Client Routes */}
        <Route path="/client/*" element={<ClientLayout />} />

        {/* Admin Layout */}
        <Route path="/admin/*" element={<AdminLayout />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Supervisor Layout */}
        <Route path="/supervisor/*" element={<SupervisorLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
