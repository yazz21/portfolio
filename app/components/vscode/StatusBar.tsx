"use client";

export default function StatusBar() {
  return (
    <div className="h-6 flex items-center justify-between px-2 bg-[#007acc] text-white text-[11px] font-sans select-none z-50">
      <div className="flex items-center space-x-3">
        <div className="flex items-center cursor-pointer hover:bg-white/20 px-1 rounded h-full">
          <svg className="w-3.5 h-3.5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
          </svg>
        </div>
        <div className="flex items-center cursor-pointer hover:bg-white/20 px-1 rounded h-full">
          <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="18" r="3"></circle>
            <circle cx="6" cy="6" r="3"></circle>
            <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
            <line x1="6" y1="9" x2="6" y2="21"></line>
          </svg>
          main*
        </div>
        <div className="flex items-center cursor-pointer hover:bg-white/20 px-1 rounded h-full space-x-1">
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22v-7l-2-2"></path>
            <path d="M12 22l2-2 2 2 2-2v-5l-2-2"></path>
            <path d="M12 22l-2-2-2 2-2-2v-5l2-2"></path>
            <path d="M10 13v-2l2-2 2 2v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span>0</span>
          <svg className="w-3 h-3 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
          <span>0</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        <div className="cursor-pointer hover:bg-white/20 px-1 rounded h-full flex items-center">UTF-8</div>
        <div className="cursor-pointer hover:bg-white/20 px-1 rounded h-full flex items-center">CRLF</div>
        <div className="cursor-pointer hover:bg-white/20 px-1 rounded h-full flex items-center">TypeScript React</div>
        <div className="cursor-pointer hover:bg-white/20 px-1 rounded h-full flex items-center">
          <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          Prettier
        </div>
      </div>
    </div>
  );
}
