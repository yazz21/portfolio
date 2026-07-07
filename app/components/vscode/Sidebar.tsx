"use client";

import { useState } from "react";
import { useVSCode } from "../../context/VSCodeContext";

const navItems = [
  { id: 'page', label: 'page.tsx', isFolder: false, icon: 'tsx' },
  { id: 'about', label: 'about.tsx', isFolder: false, icon: 'tsx' },
  { id: 'experience', label: 'experience.tsx', isFolder: false, icon: 'tsx' },
  { id: 'projects', label: 'projects.tsx', isFolder: false, icon: 'tsx' },
  { id: 'contact', label: 'contact.tsx', isFolder: false, icon: 'tsx' },
  // { id: 'testimonials', label: 'testimonials.tsx', isFolder: false, icon: 'tsx' },
];

const mockSearchContent = [
  { id: 'about', label: 'about.tsx', snippet: 'Based in Addis Ababa, Ethiopia...', keywords: ['addis ababa', 'ethiopia', 'about', 'developer', 'yosef'] },
  { id: 'projects', label: 'projects.tsx', snippet: 'export const projects = [{ name: "Grar Books" }...', keywords: ['grar books', 'holy trinity', 'uniflow', 'bookverse', 'projects'] },
  { id: 'experience', label: 'experience.tsx', snippet: 'Xoka IT Solutions // Full Stack Developer...', keywords: ['xoka', 'it solutions', 'experience', 'work'] },
  { id: 'contact', label: 'contact.tsx', snippet: 'export default function Contact() { ...', keywords: ['contact', 'email', 'social'] },
  { id: 'testimonials', label: 'testimonials.tsx', snippet: 'const testimonials = [ ...', keywords: ['testimonials', 'reviews'] },
  { id: 'page', label: 'page.tsx', snippet: 'import Hero from "./components/Hero";', keywords: ['hero', 'page', 'home'] }
];

export default function Sidebar() {
  const [isFolderOpen, setIsFolderOpen] = useState(true);
  const { isSidebarOpen, sidebarView, openTab, searchQuery, setSearchQuery } = useVSCode();

  if (!isSidebarOpen) return null;

  const filteredSearch = mockSearchContent.filter(item => 
    item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.keywords.some(k => k.includes(searchQuery.toLowerCase()))
  );

  const renderView = () => {
    switch (sidebarView) {
      case 'search':
        return (
          <div className="p-4">
            <input 
              type="text" 
              placeholder="Search files and content..."
              className="w-full bg-[#3c3c3c] text-[var(--foreground)] px-2 py-1 border border-[#555] focus:outline-none focus:border-blue-500 mb-4 text-xs rounded"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            {searchQuery && filteredSearch.length === 0 && (
              <p className="text-xs opacity-50 px-2">No results found.</p>
            )}
            {searchQuery && filteredSearch.map(item => (
              <div 
                key={item.id}
                onClick={() => openTab(item.id, item.label)}
                className="flex flex-col py-1 px-2 cursor-pointer hover:bg-[var(--box-bg)] mb-2 rounded"
              >
                <div className="flex items-center text-[var(--accent)] hover:text-[var(--foreground)] mb-1">
                  <svg className="w-3.5 h-3.5 mr-2 text-blue-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v2h2v-2h-2zm0-4v2h2V7h-2z" />
                  </svg>
                  <span className="text-xs font-bold truncate">{item.label}</span>
                </div>
                <div className="text-[10px] text-[var(--foreground)] ml-5 truncate border border-[var(--border)] bg-black/20 p-1 rounded font-mono">
                  {item.snippet}
                </div>
              </div>
            ))}
          </div>
        );
      
      case 'source-control':
        return (
          <div className="p-4 text-xs text-[var(--accent)]">
            <div className="mb-4">
              <input type="text" placeholder="Message (Enter to commit on 'main')" className="w-full bg-[#3c3c3c] border border-[#555] rounded px-2 py-1.5 mb-2 text-[var(--foreground)] focus:outline-none focus:border-blue-500" />
              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-1.5 rounded transition-colors">Commit</button>
            </div>
            <div className="flex items-center text-[var(--foreground)] mb-2 font-bold cursor-pointer hover:text-white">
              <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              Staged Changes <span className="ml-auto bg-[#555] text-white rounded-full px-1.5 text-[9px]">0</span>
            </div>
            <div className="flex items-center text-[var(--foreground)] mb-1 font-bold cursor-pointer hover:text-white">
              <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              Changes <span className="ml-auto bg-[#555] text-white rounded-full px-1.5 text-[9px]">2</span>
            </div>
            <div className="pl-4 flex flex-col mt-2">
              <div className="flex items-center text-[var(--foreground)] hover:bg-[var(--box-bg)] cursor-pointer py-1 px-1 rounded">
                <span className="text-yellow-400 mr-2 font-bold w-3 text-center">M</span>
                <span className="truncate">app/page.tsx</span>
              </div>
              <div className="flex items-center text-[var(--foreground)] hover:bg-[var(--box-bg)] cursor-pointer py-1 px-1 rounded">
                <span className="text-green-400 mr-2 font-bold w-3 text-center">U</span>
                <span className="truncate">components/Hero.tsx</span>
              </div>
            </div>
          </div>
        );

      case 'extensions':
        return (
          <div className="p-0 text-xs">
            <div className="px-4 py-2 border-b border-[var(--border)] font-bold text-[var(--foreground)] uppercase text-[10px] tracking-wider opacity-80">Installed</div>
            
            <div className="flex items-start p-3 border-b border-[var(--border)] hover:bg-[var(--box-bg)] cursor-pointer transition-colors">
              <div className="w-8 h-8 bg-[#38bdf8] rounded mr-3 flex-shrink-0 flex items-center justify-center text-white font-bold text-lg">T</div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-[var(--foreground)] font-bold truncate">Tailwind CSS IntelliSense</span>
                <span className="text-[var(--accent)] text-[10px] truncate">Tailwind Labs</span>
              </div>
            </div>
            
            <div className="flex items-start p-3 border-b border-[var(--border)] hover:bg-[var(--box-bg)] cursor-pointer transition-colors">
              <div className="w-8 h-8 bg-[#4b32c3] rounded mr-3 flex-shrink-0 flex items-center justify-center text-white font-bold text-lg">E</div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-[var(--foreground)] font-bold truncate">ESLint</span>
                <span className="text-[var(--accent)] text-[10px] truncate">Microsoft</span>
              </div>
            </div>
            
            <div className="flex items-start p-3 border-b border-[var(--border)] hover:bg-[var(--box-bg)] cursor-pointer transition-colors">
              <div className="w-8 h-8 bg-[#f7b93e] rounded mr-3 flex-shrink-0 flex items-center justify-center text-white font-bold text-lg">P</div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-[var(--foreground)] font-bold truncate">Prettier - Code formatter</span>
                <span className="text-[var(--accent)] text-[10px] truncate">Prettier</span>
              </div>
            </div>
          </div>
        );

      case 'explorer':
      default:
        return (
          <>
            {/* Project Folder */}
            <div 
              className="flex items-center px-2 py-1.5 cursor-pointer hover:bg-[var(--box-bg)] font-bold text-sm transition-colors"
              onClick={() => setIsFolderOpen(!isFolderOpen)}
            >
              <svg className={`w-4 h-4 mr-1 transition-transform ${isFolderOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="uppercase text-[11px] tracking-widest">Yosef_Portfolio</span>
            </div>

            {/* Files List */}
            {isFolderOpen && (
              <div className="flex flex-col mt-1">
                <div className="flex items-center px-6 py-1 text-[var(--accent)] hover:text-[var(--foreground)] hover:bg-[var(--box-bg)] cursor-pointer transition-colors">
                  <span className="mr-2 opacity-50">📁</span>
                  <span className="text-sm">components</span>
                </div>
                {navItems.map((item) => (
                  <div 
                    key={item.id} 
                    onClick={() => openTab(item.id, item.label)}
                    className="flex items-center pl-8 pr-4 py-1.5 text-[var(--accent)] hover:text-[var(--foreground)] hover:bg-[var(--box-bg)] transition-colors cursor-pointer"
                  >
                    <svg className="w-3.5 h-3.5 mr-2 text-blue-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v2h2v-2h-2zm0-4v2h2V7h-2z" />
                    </svg>
                    <span className="truncate text-sm">{item.label}</span>
                  </div>
                ))}
                <div className="flex items-center px-6 py-1.5 text-[var(--accent)] hover:text-[var(--foreground)] hover:bg-[var(--box-bg)] cursor-pointer transition-colors mt-2">
                  <span className="mr-2 text-yellow-400">{ }</span>
                  <span className="text-sm">package.json</span>
                </div>
              </div>
            )}
          </>
        );
    }
  };

  return (
    <div className="w-60 bg-[#252526] dark:bg-[var(--background)] border-r border-[var(--border)] hidden md:flex flex-col select-none">
      <div className="uppercase text-xs tracking-wider px-4 py-3 opacity-80 flex items-center justify-between">
        <span>{sidebarView === 'source-control' ? 'Source Control' : sidebarView}</span>
        <span className="opacity-50 hover:opacity-100 cursor-pointer">•••</span>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {renderView()}
      </div>
    </div>
  );
}
