"use client";

import { useVSCode } from "../../context/VSCodeContext";

export default function RightSidebar() {
  const { isRightSidebarOpen, toggleRightSidebar } = useVSCode();

  if (!isRightSidebarOpen) return null;

  return (
    <div className="w-80 bg-[#252526] dark:bg-[var(--background)] border-l border-[var(--border)] hidden md:flex flex-col select-none relative h-full">
      <div className="uppercase text-xs tracking-wider px-4 py-2 opacity-80 flex items-center justify-between border-b border-[var(--border)]">
        <span>AI Chat</span>
        <span className="opacity-50 hover:opacity-100 cursor-pointer" onClick={toggleRightSidebar}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </span>
      </div>

      <div className="flex-1 overflow-y-auto p-4 custom-scrollbar text-xs">
        {/* Chat History */}
        <div className="mb-4">
          <div className="flex items-start mb-4">
            <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center mr-2 shrink-0 font-bold">U</div>
            <div className="bg-[#3c3c3c] p-2 rounded-lg text-[var(--foreground)] w-full">
              Can you help me improve the Hero section of this portfolio?
            </div>
          </div>
          
          <div className="flex items-start mb-4">
            <div className="w-6 h-6 rounded bg-green-600 flex items-center justify-center mr-2 shrink-0 font-bold">AI</div>
            <div className="p-2 w-full text-[var(--accent)]">
              <p className="mb-2">Certainly! To improve the Hero section, I recommend reducing the size of the profile picture so it fits better within the editor layout.</p>
              <div className="bg-black/30 p-2 rounded border border-[var(--border)] font-mono text-[10px]">
                <code>
                  - width=&#123;400&#125; height=&#123;400&#125;<br/>
                  + width=&#123;150&#125; height=&#123;150&#125;<br/>
                  + className="... w-40 h-40 object-cover"
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="p-3 border-t border-[var(--border)] bg-[#2d2d2d] dark:bg-[var(--box-bg)]">
        <div className="relative">
          <textarea 
            className="w-full bg-[#3c3c3c] text-[var(--foreground)] px-3 py-2 pr-8 border border-[#555] rounded resize-none h-16 focus:outline-none focus:border-blue-500 text-xs"
            placeholder="Ask anything about your codebase..."
          />
          <button className="absolute right-2 bottom-2 p-1 bg-blue-600 rounded text-white hover:bg-blue-500">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
