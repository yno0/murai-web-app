import React, { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { FiHome, FiAlertTriangle, FiTool, FiUserCheck, FiInfo, FiArrowUpRight, FiChevronLeft, FiMenu, FiLogOut } from "react-icons/fi";
import { useLocation } from "react-router-dom";

export function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const menu = [
    { label: "Home", icon: <FiHome />, href: "/admin/dashboard" },
    { label: "Detection", icon: <FiAlertTriangle />, href: "/admin/detections" },
    { label: "Extension", icon: <FiTool />, href: "/admin/extension" },
    { label: "Supervision Status", icon: <FiUserCheck />, href: "/admin/supervision" },
    { label: "Help / User Guide", icon: <FiInfo />, href: "/admin/help" },
  ];

  return (
    <aside
      className={`bg-white h-screen flex flex-col justify-between border-r border-gray-100 shadow-sm transition-all duration-300 ${isOpen ? "w-70" : "w-16"}`}
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      {/* Top: Toggle and Logo */}
      <div>
        {/* Toggle Button (always at top) - removed in open state, only used in closed state */}
        {!isOpen && (
          <div className="flex items-center mb-16 mt-2 justify-center" style={{ minHeight: 56 }}>
            <button
              className="p-2 rounded-full hover:bg-gray-100 transition mx-auto"
              onClick={() => setIsOpen(true)}
              aria-label="Open sidebar"
            >
              <FiMenu size={22} />
            </button>
          </div>
        )}
        {/* Logo and Menu together */}
        {isOpen && (
          <div className="flex flex-col pl-7 pr-4 mt-10">
            <div className="flex items-center mt-1 mb-14">
              <img src={Logo} alt="Murai-Logo" className="h-10 " />
              <button
                className="ml-auto p-2 rounded-full hover:bg-gray-100 transition"
                onClick={() => setIsOpen(false)}
                aria-label="Close sidebar"
              >
                <FiChevronLeft size={22} />
              </button>
            </div>
            <nav className="flex flex-col gap-2">
              {menu.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`flex items-center gap-4 px-2 py-2 rounded-xl w-full transition-all
                      ${isActive ? "bg-gray-100 text-black" : "text-[#787878] hover:bg-gray-50 hover:text-black"}`}
                    style={{ fontSize: '16px', fontWeight: '300' }}
                    aria-label={item.label}
                  >
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <span className="pl-1" style={{ fontSize: '16px', fontWeight: '300' }}>{item.label}</span>
                  </a>
                );
              })}
            </nav>
          </div>
        )}
      </div>
      {/* Bottom: Upgrade/User/Logout */}
      <div className={`flex flex-col gap-3 mb-4 ${isOpen ? "px-4" : "items-center"}`}>
        {isOpen ? (
          <>
            {/* Upgrade Card */}
            <div className="px-3 py-4 rounded-xl bg-gradient-to-b from-gray-100 to-white text-center flex flex-col items-center">
              <span className="font-semibold text-sm mb-1">Update to Pro</span>
              <span className="text-xs text-gray-500 mb-3">Get 1 month free<br/>and unlock</span>
              <button className="bg-black text-white rounded-full px-6 py-2 text-sm font-semibold">Upgrade</button>
            </div>
            {/* User Box */}
            <div className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3 text-[#787878] text-sm font-medium shadow-sm">
              <span>Mhark Anthony P.</span>
              <FiArrowUpRight className="text-lg" />
            </div>
          </>
        ) : (
          <button
            className="p-2 rounded-full hover:bg-gray-100 transition text-[#787878]"
            aria-label="Logout"
            // onClick={handleLogout}
          >
            <FiLogOut size={22} />
          </button>
        )}
      </div>
    </aside>
  );
}