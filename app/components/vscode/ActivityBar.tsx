"use client";
import { useVSCode } from "../../context/VSCodeContext";

export default function ActivityBar() {
  const { toggleSidebar, setSidebarView, sidebarView, toggleRightSidebar, isRightSidebarOpen } = useVSCode();

  const handleIconClick = (view: "explorer" | "search" | "source-control" | "extensions") => {
    if (sidebarView !== view) {
      setSidebarView(view);
    } else {
      toggleSidebar();
    }
  };

  return (
    <div className="w-12 h-full bg-[#333333] dark:bg-[var(--box-bg)] border-r border-[var(--border)] flex flex-col items-center justify-between py-4 select-none">
      <div className="flex flex-col items-center space-y-6 w-full">
        {/* Explorer Icon */}
        <div 
          className={`cursor-pointer relative w-full flex justify-center ${sidebarView === 'explorer' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
          onClick={() => handleIconClick('explorer')}
        >
          {sidebarView === 'explorer' && <div className="absolute left-0 top-0 h-full w-1 bg-[var(--link)] rounded-r"></div>}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--foreground)]">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
          </svg>
        </div>

        {/* Search Icon */}
        <div 
          className={`cursor-pointer relative w-full flex justify-center ${sidebarView === 'search' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
          onClick={() => handleIconClick('search')}
        >
          {sidebarView === 'search' && <div className="absolute left-0 top-0 h-full w-1 bg-[var(--link)] rounded-r"></div>}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--foreground)]">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>

        {/* Source Control Icon */}
        <div 
          className={`cursor-pointer relative w-full flex justify-center ${sidebarView === 'source-control' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
          onClick={() => handleIconClick('source-control')}
        >
          {sidebarView === 'source-control' && <div className="absolute left-0 top-0 h-full w-1 bg-[var(--link)] rounded-r"></div>}
          <span className="absolute -top-1 right-2 bg-blue-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">1</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--foreground)]">
            <circle cx="18" cy="18" r="3"></circle>
            <circle cx="6" cy="6" r="3"></circle>
            <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
            <line x1="6" y1="9" x2="6" y2="21"></line>
          </svg>
        </div>

        {/* Extensions Icon */}
        <div 
          className={`cursor-pointer relative w-full flex justify-center ${sidebarView === 'extensions' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
          onClick={() => handleIconClick('extensions')}
        >
          {sidebarView === 'extensions' && <div className="absolute left-0 top-0 h-full w-1 bg-[var(--link)] rounded-r"></div>}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--foreground)]">
            <rect x="14" y="2" width="8" height="8" rx="1" ry="1"></rect>
            <rect x="2" y="14" width="8" height="8" rx="1" ry="1"></rect>
            <rect x="14" y="14" width="8" height="8" rx="1" ry="1"></rect>
            <path d="M6 14v-4a2 2 0 0 1 2-2h4"></path>
          </svg>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-6 w-full">
        {/* AI Chat / Copilot Icon */}
        <div 
          className={`cursor-pointer relative w-full flex justify-center ${isRightSidebarOpen ? 'opacity-100 text-blue-500' : 'opacity-50 hover:opacity-100'}`}
          onClick={toggleRightSidebar}
        >
          {isRightSidebarOpen && <div className="absolute left-0 top-0 h-full w-1 bg-[var(--link)] rounded-r"></div>}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a2 2 0 0 1 2 2c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></path>
            <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9"></path>
            <circle cx="9" cy="11" r="1"></circle>
            <circle cx="15" cy="11" r="1"></circle>
          </svg>
        </div>
        
        {/* Settings Icon */}
        <div className="cursor-pointer opacity-50 hover:opacity-100 w-full flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--foreground)]">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
