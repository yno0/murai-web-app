import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import ClientLayout from "./layouts/ClientLayout";
import SupervisorLayout from "./layouts/SupervisorLayout";
export function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" />

        {/* Client Routes */}
        <Route path="/client" element={<ClientLayout />}>
          <Route path="dashboard" element={<div>Client Dashboard</div>} />
          <Route path="profile" element={<div>Client Profile</div>} />
          <Route path="settings" element={<div>Client Settings</div>} />
          <Route path="*" element={<div>Client Not Found</div>} />
        </Route>

        {/* Admin Layout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<div>Admin Dashboard</div>} />
          <Route path="users" element={<div>Admin Users</div>} />
          <Route path="settings" element={<div>Admin Settings</div>} />
          <Route path="*" element={<div>Admin Not Found</div>} />
        </Route>

        <Route path="/supervisor" element={<SupervisorLayout />}>
          <Route path="dashboard" element={<div>Supervisor Dashboard</div>} />
          <Route path="users" element={<div>Supervisor Users</div>} />
          <Route path="settings" element={<div>Supervisor Settings</div>} />
          <Route path="*" element={<div>Supervisor Not Found</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
