import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiHome, FiUsers, FiBarChart2, FiSettings, FiAlertCircle, FiEdit, FiList, FiUser, FiHelpCircle, FiLogOut, FiToggleLeft, FiToggleRight, FiGroup, FiClipboard, FiLink2 } from "react-icons/fi";

export function SupervisorSidebar() {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <aside
      className={`h-screen flex flex-col transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-16" : "w-72"
      } bg-white shadow-xl border-r border-blue-200 rounded-r-xl overflow-hidden`}
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      {/* Header */}
      <div className="p-4 border-b border-blue-100 flex items-center justify-between bg-gradient-to-r from-blue-100 to-white">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
        </div>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg hover:bg-blue-100 focus-visible:ring-2 focus-visible:ring-blue-400 transition-colors"
          aria-label="Toggle sidebar"
        >
          {isCollapsed ? <FiToggleRight /> : <FiToggleLeft />}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto px-2 py-4">
        {/* DASHBOARD */}
        <div className="mb-4">
          <p className="px-4 text-xs text-blue-400 font-semibold mb-2 tracking-widest">DASHBOARD</p>
          <ul className="space-y-1">
            <li>
              <Link to="/supervisor/dashboard" className={`group flex items-center gap-3 px-4 py-2 rounded-lg transition-all font-medium ${isActive("/supervisor/dashboard") ? "bg-blue-100 text-blue-700 shadow-sm" : "text-blue-900 hover:bg-blue-50 hover:text-blue-700"}`}
                aria-current={isActive("/supervisor/dashboard") ? "page" : undefined}>
                <FiHome className="text-lg" />
                {!isCollapsed && <span>Dashboard</span>}
              </Link>
            </li>
            <li>
              <Link to="/supervisor/groups" className={`group flex items-center gap-3 px-4 py-2 rounded-lg transition-all font-medium ${isActive("/supervisor/groups") ? "bg-blue-100 text-blue-700 shadow-sm" : "text-blue-900 hover:bg-blue-50 hover:text-blue-700"}`}
                aria-current={isActive("/supervisor/groups") ? "page" : undefined}>
                <FiGroup className="text-lg" />
                {!isCollapsed && <span>Manage Groups</span>}
              </Link>
            </li>
            <li>
              <Link to="/supervisor/linked-users" className={`group flex items-center gap-3 px-4 py-2 rounded-lg transition-all font-medium ${isActive("/supervisor/linked-users") ? "bg-blue-100 text-blue-700 shadow-sm" : "text-blue-900 hover:bg-blue-50 hover:text-blue-700"}`}
                aria-current={isActive("/supervisor/linked-users") ? "page" : undefined}>
                <FiUsers className="text-lg" />
                {!isCollapsed && <span>Linked Users</span>}
              </Link>
            </li>
            <li>
              <Link to="/supervisor/alerts" className={`group flex items-center gap-3 px-4 py-2 rounded-lg transition-all font-medium ${isActive("/supervisor/alerts") ? "bg-blue-100 text-blue-700 shadow-sm" : "text-blue-900 hover:bg-blue-50 hover:text-blue-700"}`}
                aria-current={isActive("/supervisor/alerts") ? "page" : undefined}>
                <FiAlertCircle className="text-lg" />
                {!isCollapsed && <span>Alerts & Reports</span>}
              </Link>
            </li>
          </ul>
        </div>

        {/* SETTINGS */}
        <div className="mb-4">
          <p className="px-4 text-xs text-blue-400 font-semibold mb-2 tracking-widest">SETTINGS</p>
          <ul className="space-y-1">
            <li>
              <Link to="/supervisor/settings" className={`group flex items-center gap-3 px-4 py-2 rounded-lg transition-all font-medium ${isActive("/supervisor/settings") ? "bg-blue-100 text-blue-700 shadow-sm" : "text-blue-900 hover:bg-blue-50 hover:text-blue-700"}`}
                aria-current={isActive("/supervisor/settings") ? "page" : undefined}>
                <FiSettings className="text-lg" />
                {!isCollapsed && <span>Settings</span>}
              </Link>
            </li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div className="mb-4">
          <p className="px-4 text-xs text-blue-400 font-semibold mb-2 tracking-widest">SUPPORT</p>
          <ul className="space-y-1">
            <li>
              <Link to="/supervisor/help" className={`group flex items-center gap-3 px-4 py-2 rounded-lg transition-all font-medium ${isActive("/supervisor/help") ? "bg-blue-100 text-blue-700 shadow-sm" : "text-blue-900 hover:bg-blue-50 hover:text-blue-700"}`}
                aria-current={isActive("/supervisor/help") ? "page" : undefined}>
                <FiHelpCircle className="text-lg" />
                {!isCollapsed && <span>Help / Guide</span>}
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Profile & Logout */}
      <div className="p-4 border-t border-blue-100 mt-auto bg-gradient-to-r from-blue-50 to-white">
        <div className="flex items-center mb-3">
          <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg">S</div>
          {!isCollapsed && (
            <div className="ml-3">
              <p className="text-sm font-semibold text-blue-900">Supervisor</p>
              <p className="text-xs text-blue-400">Team Lead</p>
            </div>
          )}
        </div>
        <button className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold transition-all">
          <FiLogOut />
          {!isCollapsed && "Logout"}
        </button>
        {!isCollapsed && <p className="text-xs text-blue-300 text-center mt-4">© 2023 Murai, Inc.</p>}
      </div>
    </aside>
  );
}