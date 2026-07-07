"use client";

import { useVSCode } from "../../context/VSCodeContext";

const navItems = [
  { id: 'page', label: 'page.tsx', icon: 'tsx' },
  { id: 'about', label: 'about.tsx', icon: 'tsx' },
  { id: 'experience', label: 'experience.tsx', icon: 'tsx' },
  { id: 'projects', label: 'projects.tsx', icon: 'tsx' },
  { id: 'contact', label: 'contact.tsx', icon: 'tsx' },
];

export default function MobileMenu() {
  const { isMobileMenuOpen, toggleMobileMenu, openTab } = useVSCode();

  if (!isMobileMenuOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#252526] dark:bg-[var(--background)] flex flex-col md:hidden animate-in fade-in duration-200">
      <div className="flex items-center justify-between p-4 border-b border-[var(--border)]">
        <span className="text-[var(--foreground)] font-bold uppercase tracking-widest text-sm">Navigation</span>
        <button 
          onClick={toggleMobileMenu}
          className="p-2 text-[var(--accent)] hover:text-[var(--foreground)]"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-2">
        <div className="text-[var(--accent)] uppercase text-xs tracking-wider px-4 py-2 mb-2 font-bold opacity-70">
          EXPLORER
        </div>
        <div className="flex flex-col space-y-1">
          {navItems.map((item) => (
            <div 
              key={item.id} 
              onClick={() => {
                openTab(item.id, item.label);
                toggleMobileMenu();
              }}
              className="flex items-center px-4 py-3 text-[var(--foreground)] hover:bg-[var(--box-bg)] transition-colors cursor-pointer rounded-md border border-transparent hover:border-[var(--border)]"
            >
              <svg className="w-5 h-5 mr-3 text-blue-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v2h2v-2h-2zm0-4v2h2V7h-2z" />
              </svg>
              <span className="text-base font-mono">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
