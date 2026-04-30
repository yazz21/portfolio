"use client";

import { useVSCode } from "../../context/VSCodeContext";

export default function TabsBar() {
  const { openTabs, activeTab, setActiveTab, closeTab } = useVSCode();

  return (
    <div className="flex bg-[#2d2d2d] dark:bg-[var(--background)] h-9 overflow-x-auto select-none no-scrollbar shrink-0">
      {openTabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <div 
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`group flex items-center min-w-[120px] max-w-[200px] px-3 border-r border-[var(--border)] cursor-pointer ${
              isActive 
                ? "bg-[#1e1e1e] dark:bg-[var(--box-bg)] border-t-2 border-t-blue-500 text-[var(--foreground)]" 
                : "bg-transparent text-[var(--accent)] hover:bg-white/5"
            }`}
          >
            <svg className="w-4 h-4 mr-2 text-blue-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v2h2v-2h-2zm0-4v2h2V7h-2z" />
            </svg>
            <span className="truncate text-xs">{tab.title}</span>
            <div 
              onClick={(e) => {
                e.stopPropagation();
                closeTab(tab.id);
              }}
              className={`ml-auto pl-2 rounded-md p-0.5 ${isActive ? 'opacity-100 hover:bg-white/10' : 'opacity-0 group-hover:opacity-100 hover:bg-white/10'}`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </div>
          </div>
        );
      })}
    </div>
  );
}
