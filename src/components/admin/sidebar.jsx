import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { FiHome, FiBarChart2, FiSettings, FiUsers, FiClipboard, FiList, FiUser, FiHelpCircle, FiLogOut, FiToggleLeft, FiToggleRight, FiAlertCircle, FiEdit, FiDatabase, FiKey, FiShield, FiChevronDown } from "react-icons/fi";

export function AdminSidebar() {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <aside
      className={`h-screen flex flex-col transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-16" : "w-72"
      } bg-white shadow-xl border-r border-gray-200 rounded-r-xl overflow-hidden`}
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-indigo-100 to-white">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Murai-Logo" className="h-7" />
        </div>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg hover:bg-indigo-100 focus-visible:ring-2 focus-visible:ring-indigo-400 transition-colors"
          aria-label="Toggle sidebar"
        >
          {isCollapsed ? <FiToggleRight /> : <FiToggleLeft />}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto px-2 py-4">
        {/* ADMIN DASHBOARD */}
        <div className="mb-4">
          <p className="px-4 text-xs text-gray-400 font-semibold mb-2 tracking-widest">ADMIN DASHBOARD</p>
          <ul className="space-y-1">
            <li>
              <Link to="/admin/dashboard" className={`group flex items-center gap-3 px-4 py-2 rounded-lg transition-all font-medium ${isActive("/admin/dashboard") ? "bg-indigo-100 text-indigo-700 shadow-sm" : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"}`}
                aria-current={isActive("/admin/dashboard") ? "page" : undefined}>
                <FiHome className="text-lg" />
                {!isCollapsed && <span>Dashboard</span>}
              </Link>
            </li>
            <li>
              <Link to="/admin/heatmap" className={`group flex items-center gap-3 px-4 py-2 rounded-lg transition-all font-medium ${isActive("/admin/heatmap") ? "bg-indigo-100 text-indigo-700 shadow-sm" : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"}`}
                aria-current={isActive("/admin/heatmap") ? "page" : undefined}>
                <FiBarChart2 className="text-lg" />
                {!isCollapsed && <span>Flagged Word Heatmap</span>}
              </Link>
            </li>
            <li>
              <Link to="/admin/performance" className={`group flex items-center gap-3 px-4 py-2 rounded-lg transition-all font-medium ${isActive("/admin/performance") ? "bg-indigo-100 text-indigo-700 shadow-sm" : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"}`}
                aria-current={isActive("/admin/performance") ? "page" : undefined}>
                <FiDatabase className="text-lg" />
                {!isCollapsed && <span>Model Performance</span>}
                </Link>
            </li>
          </ul>
        </div>

        {/* TOOLS */}
        <div className="mb-4">
          <p className="px-4 text-xs text-gray-400 font-semibold mb-2 tracking-widest">TOOLS</p>
          <ul className="space-y-1">
            <li>
              <Link to="/admin/settings" className={`group flex items-center gap-3 px-4 py-2 rounded-lg transition-all font-medium ${isActive("/admin/settings") ? "bg-indigo-100 text-indigo-700 shadow-sm" : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"}`}
                aria-current={isActive("/admin/settings") ? "page" : undefined}>
                <FiSettings className="text-lg" />
                {!isCollapsed && <span>Settings</span>}
              </Link>
            </li>
            <li>
              <Link to="/admin/users" className={`group flex items-center gap-3 px-4 py-2 rounded-lg transition-all font-medium ${isActive("/admin/users") ? "bg-indigo-100 text-indigo-700 shadow-sm" : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"}`}
                aria-current={isActive("/admin/users") ? "page" : undefined}>
                <FiUsers className="text-lg" />
                {!isCollapsed && <span>Users</span>}
              </Link>
            </li>
            <li>
              <Link to="/admin/reports" className={`group flex items-center gap-3 px-4 py-2 rounded-lg transition-all font-medium ${isActive("/admin/reports") ? "bg-indigo-100 text-indigo-700 shadow-sm" : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"}`}
                aria-current={isActive("/admin/reports") ? "page" : undefined}>
                <FiClipboard className="text-lg" />
                {!isCollapsed && <span>Reports</span>}
              </Link>
            </li>
            <li>
              <Link to="/admin/system" className={`group flex items-center gap-3 px-4 py-2 rounded-lg transition-all font-medium ${isActive("/admin/system") ? "bg-indigo-100 text-indigo-700 shadow-sm" : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"}`}
                aria-current={isActive("/admin/system") ? "page" : undefined}>
                <FiDatabase className="text-lg" />
                {!isCollapsed && <span>System</span>}
              </Link>
            </li>
          </ul>
        </div>

        {/* ADMIN DASHBOARD */}
          <div className="mb-4">
          <p className="px-4 text-xs text-gray-400 font-semibold mb-2 tracking-widest">ADMIN DASHBOARD</p>
          <ul className="space-y-1">
            <li>
              <Link to="/admin/dashboard" className={`group flex items-center gap-3 px-4 py-2 rounded-lg transition-all font-medium ${isActive("/admin/dashboard") ? "bg-indigo-100 text-indigo-700 shadow-sm" : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"}`}
                aria-current={isActive("/admin/dashboard") ? "page" : undefined}>
                <FiHome className="text-lg" />
                {!isCollapsed && <span>Dashboard</span>}
              </Link>
            </li>
            <li>
              <Link to="/admin/heatmap" className={`group flex items-center gap-3 px-4 py-2 rounded-lg transition-all font-medium ${isActive("/admin/heatmap") ? "bg-indigo-100 text-indigo-700 shadow-sm" : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"}`}
                aria-current={isActive("/admin/heatmap") ? "page" : undefined}>
                <FiBarChart2 className="text-lg" />
                {!isCollapsed && <span>Flagged Word Heatmap</span>}
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* User Profile Section */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700">
        <button className="w-full bg-gray-700 hover:bg-gray-600 transition-colors py-3 px-4 rounded-lg flex items-center justify-between group">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
              A
            </div>
            {!isCollapsed && (
              <div className="ml-3 text-left">
                <p className="text-sm font-medium text-white">Admin User</p>
                <p className="text-xs text-gray-400">Administrator</p>
              </div>
            )}
          </div>
          {!isCollapsed && (
            <span className="text-gray-400 group-hover:text-white">⚙️</span>
          )}
        </button>
      </div>
    </aside>
  );
}