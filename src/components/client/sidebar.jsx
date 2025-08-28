import React, { useState, useRef, useEffect } from "react";
import Logo from "../../assets/Logo.svg";
import { FiHome, FiAlertTriangle, FiTool, FiUserCheck, FiInfo, FiArrowUpRight, FiChevronLeft, FiMenu, FiLogOut, FiSettings, FiUser, FiChevronUp, FiChevronDown, FiMoon, FiSun } from "react-icons/fi";
import { useLocation } from "react-router-dom";

export function ClientSidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
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

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // TODO: Implement actual dark mode logic here
    // You might want to use a theme context or CSS variables
  };

  const mainMenu = [
    { label: "Overview", icon: <FiHome />, href: "/client/dashboard" },
    { label: "Analytics", icon: <FiAlertTriangle />, href: "/client/analytics" },
    { label: "Report", icon: <FiUser />, href: "/client/reports" },
  ];

  const managementMenu = [
    { label: "Group", icon: <FiUserCheck />, href: "/client/group" },
  ];

  const toolsMenu = [
    { label: "Extension", icon: <FiTool />, href: "/client/extension" },
  ];

  const menuItems = [...mainMenu, ...managementMenu, ...toolsMenu];

  const lowerMenu = [
    { label: "Help", icon: <FiInfo />, href: "/client/help" },
    { label: "Settings", icon: <FiSettings />, href: "/client/settings" },
    { 
      label: "Dark Mode", 
      icon: isDarkMode ? <FiMoon /> : <FiSun />, 
      onClick: toggleDarkMode,
      rightElement: (
        <div className={`w-8 h-4 rounded-full transition-colors duration-200 ease-in-out relative ${isDarkMode ? 'bg-green-500' : 'bg-gray-300'}`}>
          <div className={`absolute top-0.5 left-0.5 w-3 h-3 rounded-full bg-white transition-transform duration-200 ease-in-out ${isDarkMode ? 'translate-x-4' : 'translate-x-0'}`} />
        </div>
      )
    },
  ];

  const AccountMenu = (
    <div ref={accountMenuRef} className="absolute bottom-16 left-1/2 -translate-x-1/2 z-50 w-48 bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col py-2 animate-fade-in">
      <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-800 transition text-sm" onClick={() => setShowAccountMenu(false)}>
        <FiSettings /> <span>Settings</span>
      </button>
      <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-800 transition text-sm" onClick={() => setShowAccountMenu(false)}>
        <FiUser /> <span>Billing & Usage</span>
      </button>
      <button 
        className="flex items-center justify-between w-full px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-800 transition text-sm" 
        onClick={(e) => {
          e.stopPropagation();
          toggleDarkMode();
        }}
      >
        <div className="flex items-center gap-2">
          {isDarkMode ? <FiMoon /> : <FiSun />}
          <span>Dark Mode</span>
        </div>
        <div className={`w-8 h-4 rounded-full transition-colors duration-200 ease-in-out relative ${isDarkMode ? 'bg-gray-800' : 'bg-gray-300'}`}>
          <div className={`absolute top-0.5 left-0.5 w-3 h-3 rounded-full bg-white transition-transform duration-200 ease-in-out ${isDarkMode ? 'translate-x-4' : 'translate-x-0'}`} />
        </div>
      </button>
      
      <div className="border-t border-gray-200 my-2"></div>
      <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-800 transition text-sm" onClick={() => setShowAccountMenu(false)}>
        <FiLogOut /> <span>Logout</span>
      </button>
    </div>
  );

  return (
    <aside
      className={`bg-white h-screen flex flex-col justify-between border-r border-gray-200 sgha transition-all duration-300 pt-3 ${isOpen ? "w-68" : "w-16"}`}
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
        <div className={`flex flex-col ${isOpen ? "pl-6 pr-3 mt-4" : "items-center"}`}>
          {isOpen && (
            <>
              <div className="flex items-center mt-1 mb-6">
                <div className="flex items-end gap-2">
                  <img src={Logo} alt="Murai-Logo" className="h-9" />
                </div>
                <button
                  className="ml-auto p-1.5 rounded-full hover:bg-gray-100 transition"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close sidebar"
                >
                  <FiChevronLeft size={20} />
                </button>
              </div>
              <div className="border-t border-gray-300 mb-10 -ml-6 -mr-3"></div>
            </>
          )}
          <nav className={`flex flex-col ${isOpen ? "gap-2" : "items-center gap-1.5"}`}>
            {menuItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <React.Fragment key={item.label}>
                  <a
                    href={item.href}
                    className={`flex items-center ${isOpen ? "gap-2.5 px-3 py-2.5 rounded-lg w-full" : "justify-center p-2 rounded-lg w-10 h-10"} transition-all duration-200 ease-in-out
                      ${isActive ? "bg-[#015763] text-white shadow-sm font-semibold" : "text-gray-700 hover:bg-[#015763]/10 hover:text-[#015763] hover:shadow-sm"}`}
                    style={{ fontSize: '16px', fontWeight: '400' }}
                    aria-label={item.label}
                  >
                    <span className="text-lg flex-shrink-0">{item.icon}</span>
                    {isOpen && <span className="pl-0.5" style={{ fontSize: '16px', fontWeight: '400' }}>{item.label}</span>}
                  </a>
                </React.Fragment>
              );
            })}
          </nav>
        </div>
      </div>
      {/* Bottom: Upgrade/User/Logout or Account Menu */}
      <div className={`flex flex-col gap-2 mb-3 ${isOpen ? "px-3" : "items-center"} relative`}>
        {isOpen ? (
          <>
            {/* Lower Menu Section */}
            <div className="px-3 py-2">
              {lowerMenu.map((item) => {
                const isActive = item.href ? location.pathname === item.href : false;
                const Element = item.href ? 'a' : 'button';
                return (
                  <Element
                    key={item.label}
                    href={item.href}
                    onClick={item.onClick}
                    className={`flex items-center justify-between gap-2.5 px-3 py-2 rounded-lg w-full transition-all duration-200 ease-in-out
                      ${isActive ? "bg-white text-[#015763] shadow-sm font-semibold border border-gray-100" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:shadow-sm"}`}
                    style={{ fontSize: '14px', fontWeight: '400' }}
                    aria-label={item.label}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-lg flex-shrink-0">{item.icon}</span>
                      <span className="pl-0.5">{item.label}</span>
                    </div>
                    {item.rightElement}
                  </Element>
                );
              })}
            </div>
            
            {/* Line below Help */}
            <div className="border-t border-gray-200 mx-1 mb-1"></div>
            
            {/* User Box (clickable, horizontal row) */}
            <button
              className="flex items-center justify-between bg-gradient-to-b from-gray-50 to-white border border-gray-200 rounded-lg px-3 py-3 text-gray-700 text-sm font-semibold shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-gray-400 transition group"
              onClick={() => setShowAccountMenu((prev) => !prev)}
              aria-label="Account menu"
              type="button"
              tabIndex={0}
            >
              <div className="flex flex-col items-start">
                <span>Mhark Anthony P.</span>
                <span className="text-xs text-gray-500 font-normal">mhark@example.com</span>
              </div>
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
                  <FiUser /> <span>Billing & Usage</span>
                </button>
                <button 
                  className="flex items-center justify-between w-full px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-800 transition text-sm" 
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDarkMode();
                  }}
                >
                  <div className="flex items-center gap-2">
                    {isDarkMode ? <FiMoon /> : <FiSun />}
                    <span>Dark Mode</span>
                  </div>
                  <div className={`w-8 h-4 rounded-full transition-colors duration-200 ease-in-out relative ${isDarkMode ? 'bg-gray-800' : 'bg-gray-300'}`}>
                    <div className={`absolute top-0.5 left-0.5 w-3 h-3 rounded-full bg-white transition-transform duration-200 ease-in-out ${isDarkMode ? 'translate-x-4' : 'translate-x-0'}`} />
                  </div>
                </button>
                
                <div className="border-t border-gray-200 my-2"></div>
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