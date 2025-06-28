import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { FiHome, FiBarChart2, FiClock, FiSettings, FiSliders, FiSun, FiMoon, FiList, FiUser, FiHelpCircle, FiLogOut, FiAlertCircle, FiEdit, FiToggleLeft, FiToggleRight, FiUsers, FiLink2 } from "react-icons/fi";

export function ClientSidebar() {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [theme, setTheme] = useState("light");
  const [extensionOn, setExtensionOn] = useState(true);

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
        {/* GENERAL */}
        <div className="mb-4">
          <p className="px-4 text-xs text-gray-400 font-semibold mb-2 tracking-widest">GENERAL</p>
          <ul className="space-y-1">
            <li>
              <Link to="/client/dashboard" className={`group flex items-center gap-3 px-4 py-2 rounded-lg transition-all font-medium ${isActive("/client/dashboard") ? "bg-indigo-100 text-indigo-700 shadow-sm" : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"}`}
                aria-current={isActive("/client/dashboard") ? "page" : undefined}>
                <FiHome className="text-lg" />
                {!isCollapsed && <span>Dashboard</span>}
              </Link>
            </li>
            <li>
              <Link to="/client/flagged" className={`group flex items-center gap-3 px-4 py-2 rounded-lg transition-all font-medium ${isActive("/client/flagged") ? "bg-indigo-100 text-indigo-700 shadow-sm" : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"}`}
                aria-current={isActive("/client/flagged") ? "page" : undefined}>
                <FiAlertCircle className="text-lg" />
                {!isCollapsed && <span>Flagged Content</span>}
              </Link>
            </li>
            <li>
              <Link to="/client/sentiment" className={`group flex items-center gap-3 px-4 py-2 rounded-lg transition-all font-medium ${isActive("/client/sentiment") ? "bg-indigo-100 text-indigo-700 shadow-sm" : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"}`}
                aria-current={isActive("/client/sentiment") ? "page" : undefined}>
                <FiBarChart2 className="text-lg" />
                {!isCollapsed && <span>Sentiment Summary</span>}
              </Link>
            </li>
            <li>
              <Link to="/client/history" className={`group flex items-center gap-3 px-4 py-2 rounded-lg transition-all font-medium ${isActive("/client/history") ? "bg-indigo-100 text-indigo-700 shadow-sm" : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"}`}
                aria-current={isActive("/client/history") ? "page" : undefined}>
                <FiClock className="text-lg" />
                {!isCollapsed && <span>Detection History</span>}
              </Link>
            </li>
          </ul>
        </div>

        {/* TOOLS */}
        <div className="mb-4">
          <p className="px-4 text-xs text-gray-400 font-semibold mb-2 tracking-widest">TOOLS</p>
          <ul className="space-y-1">
            <li>
              <Link to="/client/settings" className={`group flex items-center gap-3 px-4 py-2 rounded-lg transition-all font-medium ${isActive("/client/settings") ? "bg-indigo-100 text-indigo-700 shadow-sm" : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"}`}
                aria-current={isActive("/client/settings") ? "page" : undefined}>
                <FiSettings className="text-lg" />
                {!isCollapsed && <span>Customize Settings</span>}
              </Link>
            </li>
            <li>
              <div className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-indigo-50 transition-all font-medium">
                <FiSliders className="text-lg" />
                {!isCollapsed && <span>Sensitivity</span>}
                {!isCollapsed && <input type="range" min="1" max="10" className="ml-4 w-24 accent-indigo-500" />}
              </div>
            </li>
            <li>
              <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="group flex items-center gap-3 px-4 py-2 rounded-lg w-full text-left text-gray-700 hover:bg-indigo-50 transition-all font-medium">
                {theme === "light" ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
                {!isCollapsed && <span>Theme</span>}
                {!isCollapsed && <span className="ml-2 text-xs text-gray-400">{theme === "light" ? "Light" : "Dark"}</span>}
              </button>
            </li>
            <li>
              <Link to="/client/whitelist" className={`group flex items-center gap-3 px-4 py-2 rounded-lg transition-all font-medium ${isActive("/client/whitelist") ? "bg-indigo-100 text-indigo-700 shadow-sm" : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"}`}
                aria-current={isActive("/client/whitelist") ? "page" : undefined}>
                <FiList className="text-lg" />
                {!isCollapsed && <span>Whitelist</span>}
              </Link>
            </li>
            <li>
              <button onClick={() => setExtensionOn(!extensionOn)} className="group flex items-center gap-3 px-4 py-2 rounded-lg w-full text-left text-gray-700 hover:bg-indigo-50 transition-all font-medium">
                {extensionOn ? <FiToggleRight className="text-lg" /> : <FiToggleLeft className="text-lg" />}
                {!isCollapsed && <span>Extension {extensionOn ? "ON" : "OFF"}</span>}
              </button>
            </li>
          </ul>
        </div>

        {/* REPORT & SUPERVISION */}
        <div className="mb-4">
          <p className="px-4 text-xs text-gray-400 font-semibold mb-2 tracking-widest">REPORT & SUPERVISION</p>
          <ul className="space-y-1">
            <li>
              <Link to="/client/report" className={`group flex items-center gap-3 px-4 py-2 rounded-lg transition-all font-medium ${isActive("/client/report") ? "bg-indigo-100 text-indigo-700 shadow-sm" : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"}`}
                aria-current={isActive("/client/report") ? "page" : undefined}>
                <FiEdit className="text-lg" />
                {!isCollapsed && <span>Report Content</span>}
              </Link>
            </li>
            <li>
              <Link to="/client/supervision" className={`group flex items-center gap-3 px-4 py-2 rounded-lg transition-all font-medium ${isActive("/client/supervision") ? "bg-indigo-100 text-indigo-700 shadow-sm" : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"}`}
                aria-current={isActive("/client/supervision") ? "page" : undefined}>
                <FiLink2 className="text-lg" />
                {!isCollapsed && <span>Supervision Status</span>}
                {!isCollapsed && <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">Linked</span>}
              </Link>
            </li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div className="mb-4">
          <p className="px-4 text-xs text-gray-400 font-semibold mb-2 tracking-widest">SUPPORT</p>
          <ul className="space-y-1">
            <li>
              <Link to="/client/help" className={`group flex items-center gap-3 px-4 py-2 rounded-lg transition-all font-medium ${isActive("/client/help") ? "bg-indigo-100 text-indigo-700 shadow-sm" : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"}`}
                aria-current={isActive("/client/help") ? "page" : undefined}>
                <FiHelpCircle className="text-lg" />
                {!isCollapsed && <span>Help / User Guide</span>}
              </Link>
            </li>
            <li>
              <Link to="/client/faq" className={`group flex items-center gap-3 px-4 py-2 rounded-lg transition-all font-medium ${isActive("/client/faq") ? "bg-indigo-100 text-indigo-700 shadow-sm" : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"}`}
                aria-current={isActive("/client/faq") ? "page" : undefined}>
                <FiUser className="text-lg" />
                {!isCollapsed && <span>FAQs</span>}
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Profile & Logout */}
      <div className="p-4 border-t border-gray-100 mt-auto bg-gradient-to-r from-indigo-50 to-white">
        <div className="flex items-center mb-3">
          <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg">MA</div>
          {!isCollapsed && (
            <div className="ml-3">
              <p className="text-sm font-semibold text-gray-900">Mhark Anthony</p>
              <p className="text-xs text-gray-500">Student</p>
            </div>
          )}
        </div>
        <button className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-semibold transition-all">
          <FiLogOut />
          {!isCollapsed && "Logout"}
        </button>
        {!isCollapsed && <p className="text-xs text-gray-400 text-center mt-4">© 2023 Murai, Inc.</p>}
      </div>
    </aside>
  );
}
