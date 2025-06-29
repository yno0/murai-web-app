import React from "react";
import Logo from "../../assets/Logo.svg";
import { FiHome, FiAlertTriangle, FiTool, FiUserCheck, FiInfo, FiArrowUpRight } from "react-icons/fi";
import { useLocation } from "react-router-dom";

export function AdminSidebar() {
  const location = useLocation();

  const menu = [
    { label: "Home", icon: <FiHome />, href: "/admin/dashboard" },
    { label: "Detection", icon: <FiAlertTriangle />, href: "/admin/detections" },
    { label: "Extension", icon: <FiTool />, href: "/admin/extension" },
    { label: "Supervision Status", icon: <FiUserCheck />, href: "/admin/supervision" },
    { label: "Help / User Guide", icon: <FiInfo />, href: "/admin/help" },
  ];

  return (
    <aside className="bg-white h-screen w-64 flex flex-col justify-between py-6 px-0 border-r border-gray-100 shadow-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div>
        {/* Logo */}
        <div className="flex items-center mb-16 mt-2 pl-7">
          <img src={Logo} alt="Murai-Logo" className="h-10" />
        </div>
        {/* Menu */}
        <nav>
          <ul className="flex flex-col gap-2 pl-7 pr-4">
            {menu.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`flex items-center gap-4 px-2 py-2 rounded-xl transition-all w-full
                      ${isActive
                        ? "bg-gray-100 text-black"
                        : "text-[#787878] hover:bg-gray-50 hover:text-black"}
                    `}
                    style={{ fontSize: '16px', fontWeight: '400' }}
                  >
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <span className="pl-1" style={{ fontSize: '16px', fontWeight: '400' }}>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      {/* Bottom section: Upgrade Card + User Box */}
      <div className="flex flex-col gap-3 mb-4 px-4">
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
      </div>
    </aside>
  );
}