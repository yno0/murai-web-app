import React from "react";
import { Outlet, Routes, Route } from 'react-router-dom';
import { AdminSidebar } from "../components/admin/sidebar";
import Dashboard from '../pages/admin/Dashboard';
import FlaggedContent from '../pages/admin/FlaggedContent';
import UserReports from '../pages/admin/UserReports';
import Analytics from '../pages/admin/Analytics';
import UserManagement from '../pages/admin/UserManagement';
import Logs from '../pages/admin/Logs';
import Help from '../pages/admin/Help';

export default function AdminLayout() {
  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <main className="flex-1 p-6 overflow-auto">
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="flagged" element={<FlaggedContent />} />
          <Route path="reports/user-reports" element={<UserReports />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="logs" element={<Logs />} />
          <Route path="help" element={<Help />} />
        </Routes>
        <Outlet />
      </main>
    </div>
  );
}