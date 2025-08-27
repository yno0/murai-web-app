import React, { useState, useRef, useEffect } from "react";
import Logo from "../../assets/Logo.svg";
import { FiHome, FiAlertTriangle, FiBarChart2, FiUsers, FiFileText, FiActivity, FiInfo, FiChevronLeft, FiMenu, FiLogOut, FiSettings, FiUser, FiChevronUp, FiChevronDown, FiFlag, FiBookOpen } from "react-icons/fi";
import { useLocation } from "react-router-dom";

export function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const accountMenuRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    function handleClickOutside(event) {
      if (accountMenuRef.current && !accountMenuRef.current.contains(event.target)) {
        setShowAccountMenu(false);
      }
    }
    if (showAccountMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showAccountMenu]);

  const mainMenu = [
    { label: "Dashboard", icon: <FiHome />, href: "/admin/dashboard" },
  ];

  const contentMenu = [
    { label: "Flagged Content", icon: <FiFlag />, href: "/admin/flagged" },
    { label: "User Reports", icon: <FiFileText />, href: "/admin/reports/user-reports" },
  ];

  const analyticsMenu = [
    { label: "Reports & Analytics", icon: <FiBarChart2 />, href: "/admin/analytics" },
  ];

  const manageMenu = [
    { label: "User Management", icon: <FiUsers />, href: "/admin/users" },
  ];

  const systemMenu = [
    { label: "Logs & Activity", icon: <FiActivity />, href: "/admin/logs" },
  ];

  const supportMenu = [
    { label: "Help / Docs", icon: <FiBookOpen />, href: "/admin/help" },
  ];

  // Account menu popup
  const AccountMenu = (
    <div ref={accountMenuRef} className="absolute bottom-16 left-1/2 -translate-x-1/2 z-50 w-48 bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col py-2 animate-fade-in">
      <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-800 transition text-sm" onClick={() => setShowAccountMenu(false)}>
        <FiSettings /> <span>Settings</span>
      </button>
      <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-800 transition text-sm" onClick={() => setShowAccountMenu(false)}>
        <FiLogOut /> <span>Logout</span>
      </button>
    </div>
  );

  return (
    <aside
      className={`bg-white h-screen flex flex-col justify-between border-r border-gray-200/30 shadow-sm transition-all duration-300 ${isOpen ? "w-64" : "w-16"}`}
      style={{ fontFamily: 'Poppins, sans-serif', position: 'relative' }}
    >
      {/* Top: Toggle Button (closed) and Logo/Menu (open) */}
      <div>
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
        <div className={`flex flex-col ${isOpen ? "pl-6 pr-3 mt-8" : "items-center"}`}>
          {isOpen && (
            <div className="flex items-center mt-1 mb-12">
              <img src={Logo} alt="Murai-Logo" className="h-9" />
              <button
                className="ml-auto p-1.5 rounded-full hover:bg-gray-100 transition"
                onClick={() => setIsOpen(false)}
                aria-label="Close sidebar"
              >
                <FiChevronLeft size={20} />
              </button>
            </div>
          )}
          <nav className={`flex flex-col gap-1.5 ${isOpen ? "" : "items-center"}`}>
            {/* Render menu sections */}
            {[
              { items: mainMenu, showSeparator: true },
              { items: contentMenu, showSeparator: true },
              { items: analyticsMenu, showSeparator: true },
              { items: manageMenu, showSeparator: true },
              { items: systemMenu, showSeparator: true },
              { items: supportMenu, showSeparator: false }
            ].map((section, sectionIndex) => (
              <React.Fragment key={sectionIndex}>
                {section.items.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className={`flex items-center ${isOpen ? "gap-2.5 px-3 py-2 rounded-lg w-full" : "justify-center p-2 rounded-lg w-10 h-10"} transition-all
                        ${isActive ? "bg-gray-100 text-gray-800" : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"}`}
                      style={{ fontSize: '16px', fontWeight: '400' }}
                      aria-label={item.label}
                    >
                      <span className="text-lg flex-shrink-0">{item.icon}</span>
                      {isOpen && <span className="pl-0.5" style={{ fontSize: '16px', fontWeight: '400' }}>{item.label}</span>}
                    </a>
                  );
                })}
                {/* separators removed as requested */}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>
      {/* Bottom: Upgrade/User/Logout or Account Menu */}
      <div className={`flex flex-col gap-2 mb-3 ${isOpen ? "px-3" : "items-center"} relative`}>
        {isOpen ? (
          <>
            {/* Upgrade Card */}
            <div className="px-3 py-3 rounded-lg bg-gradient-to-b from-gray-100 to-gray-50 text-center flex flex-col items-center">
              <span className="font-semibold text-sm mb-1 text-gray-800">Update to Pro</span>
              <span className="text-xs text-gray-600 mb-2 font-medium">Get 1 month free<br/>and unlock</span>
              <button className="bg-gray-600 hover:bg-gray-700 text-white rounded-full px-5 py-1.5 text-sm font-semibold transition">Upgrade</button>
            </div>
            {/* User Box (clickable, horizontal row) */}
            <button
              className="flex items-center justify-between bg-gradient-to-b from-gray-50 to-white border border-gray-200 rounded-lg px-3 py-2.5 text-gray-700 text-sm font-semibold shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-gray-400 transition group"
              onClick={() => setShowAccountMenu((prev) => !prev)}
              aria-label="Account menu"
              type="button"
              tabIndex={0}
            >
              <span>Mhark Anthony P.</span>
              {showAccountMenu ? (
                <FiChevronUp className="text-lg ml-2" />
              ) : (
                <FiChevronDown className="text-lg ml-2" />
              )}
            </button>
            {showAccountMenu && AccountMenu}
          </>
        ) : (
          <>
            {/* Logout Icon (clickable) */}
            <button
              className="p-2 rounded-full hover:bg-gray-100 transition text-gray-600"
              aria-label="Account menu"
              onClick={() => setShowAccountMenu((prev) => !prev)}
              type="button"
            >
              <FiLogOut size={22} />
            </button>
            {showAccountMenu && (
              <div ref={accountMenuRef} className="absolute bottom-16 left-1/2 -translate-x-1/2 z-50 w-48 bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col py-2 animate-fade-in">
                <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-800 transition text-sm" onClick={() => setShowAccountMenu(false)}>
                  <FiSettings /> <span>Settings</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-800 transition text-sm" onClick={() => setShowAccountMenu(false)}>
                  <FiLogOut /> <span>Logout</span>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </aside>
  );
}