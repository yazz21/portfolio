"use client";

import ThemeSwitcher from "../ThemeSwitcher";
import { useVSCode } from "../../context/VSCodeContext";

export default function TitleBar() {
  const { 
    setSidebarView, 
    toggleSidebar, 
    isSidebarOpen, 
    toggleTerminal, 
    isTerminalOpen, 
    toggleRightSidebar, 
    isRightSidebarOpen 
  } = useVSCode();

  return (
    <div className="flex items-center justify-between px-3 h-8 bg-[#323233] dark:bg-[var(--box-bg)] text-[#cccccc] text-xs select-none border-b border-[var(--border)]">
      {/* Left: Window Controls & Menu */}
      <div className="flex items-center space-x-4">
        {/* Fake Mac Window Controls */}
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600"></div>
        </div>

        {/* Menus (Desktop only) */}
        <div className="hidden md:flex space-x-3">
          <div className="hover:bg-[#505050] px-1 rounded cursor-pointer">File</div>
          <div className="hover:bg-[#505050] px-1 rounded cursor-pointer">Edit</div>
          <div className="hover:bg-[#505050] px-1 rounded cursor-pointer">Selection</div>
          <div className="hover:bg-[#505050] px-1 rounded cursor-pointer">View</div>
          <div className="hover:bg-[#505050] px-1 rounded cursor-pointer">Go</div>
          <div className="hover:bg-[#505050] px-1 rounded cursor-pointer">Run</div>
          <div className="hover:bg-[#505050] px-1 rounded cursor-pointer">Terminal</div>
          <div className="hover:bg-[#505050] px-1 rounded cursor-pointer">Help</div>
        </div>
      </div>

      {/* Center: Search / Title */}
      <div className="hidden md:flex items-center justify-center flex-1 mx-4 max-w-md">
        <div 
          onClick={() => setSidebarView('search')}
          className="flex items-center bg-[#454545] border border-[#555555] rounded-md px-3 py-0.5 w-full text-center hover:bg-[#505050] cursor-pointer"
        >
          <span className="opacity-70 mx-auto truncate text-[10px]">yosef-portfolio - Visual Studio Code (Click to search)</span>
        </div>
      </div>

      {/* Right: Layout Controls & Theme Switcher */}
      <div className="flex items-center space-x-4">
        {/* Layout Toggle Icons */}
        <div className="hidden lg:flex items-center space-x-2 opacity-80">
          {/* Toggle Left Sidebar */}
          <div 
            className={`cursor-pointer hover:bg-white/10 p-0.5 rounded ${isSidebarOpen ? 'text-white' : 'text-gray-500'}`}
            onClick={toggleSidebar}
            title="Toggle Primary Side Bar"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="3" x2="9" y2="21"></line>
            </svg>
          </div>
          {/* Toggle Bottom Panel */}
          <div 
            className={`cursor-pointer hover:bg-white/10 p-0.5 rounded ${isTerminalOpen ? 'text-white' : 'text-gray-500'}`}
            onClick={toggleTerminal}
            title="Toggle Panel"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="15" x2="21" y2="15"></line>
            </svg>
          </div>
          {/* Toggle Right Sidebar */}
          <div 
            className={`cursor-pointer hover:bg-white/10 p-0.5 rounded ${isRightSidebarOpen ? 'text-white' : 'text-gray-500'}`}
            onClick={toggleRightSidebar}
            title="Toggle Secondary Side Bar"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="15" y1="3" x2="15" y2="21"></line>
            </svg>
          </div>
        </div>

        <ThemeSwitcher />
      </div>
    </div>
  );
}
