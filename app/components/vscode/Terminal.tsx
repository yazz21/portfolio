"use client";
import { useVSCode } from "../../context/VSCodeContext";

export default function Terminal() {
  const { activeTerminalTab, setActiveTerminalTab, isTerminalOpen, toggleTerminal } = useVSCode();

  if (!isTerminalOpen) {
    return (
      <div 
        className="h-6 bg-[var(--background)] border-t border-[var(--border)] flex items-center px-4 cursor-pointer hover:bg-white/5 select-none"
        onClick={toggleTerminal}
      >
        <span className="text-xs text-[var(--accent)]">Terminal (Collapsed) - Click to expand</span>
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTerminalTab) {
      case "problems":
        return <div className="text-[var(--foreground)] p-4 text-xs">No problems have been detected in the workspace.</div>;
      case "output":
        return (
          <div className="p-2 text-xs text-gray-400 font-mono">
            <p>[Info] Found 0 ESLint errors.</p>
            <p>[Info] Prettier formatting complete.</p>
            <p>[Info] Next.js telemetry is disabled.</p>
            <p>[Info] TypeScript compilation successful.</p>
          </div>
        );
      case "debug":
        return (
          <div className="p-2 text-xs font-mono">
            <p className="text-blue-400">Debugger attached.</p>
            <p className="text-gray-400">Loading variables...</p>
            <p className="text-purple-400">Object &#123; name: "Yosef", role: "Software Developer", location: "Addis Ababa" &#125;</p>
            <div className="flex items-center mt-2">
              <span className="text-blue-400 mr-2">&gt;</span>
              <span className="animate-pulse">_</span>
            </div>
          </div>
        );
      case "terminal":
      default:
        return (
          <div className="p-2 text-green-400 bg-black/20 text-xs font-mono">
            <p className="text-gray-400">Microsoft Windows [Version 10.0.19045.3803]</p>
            <p className="text-gray-400">(c) Microsoft Corporation. All rights reserved.</p>
            <br />
            <p><span className="text-blue-400">C:\Users\HP\Documents\ProjHub\portfolio&gt;</span> yarn dev</p>
            <p className="text-yellow-400">yarn run v1.22.22</p>
            <p className="text-gray-300">$ next dev --turbopack</p>
            <p className="text-green-500">ready - started server on 0.0.0.0:3000, url: http://localhost:3000</p>
            <p className="text-blue-300">event - compiled client and server successfully in 1254 ms (169 modules)</p>
            <p className="text-gray-400 mt-2">watching for changes...</p>
            <div className="animate-pulse">_</div>
          </div>
        );
    }
  };

  return (
    <div className="h-48 border-t border-[var(--border)] bg-[#1e1e1e] dark:bg-[var(--box-bg)] flex flex-col font-mono text-xs select-none">
      {/* Terminal Tabs */}
      <div className="flex items-center justify-between px-4 h-8 border-b border-[var(--border)]">
        <div className="flex space-x-4">
          <span 
            onClick={() => setActiveTerminalTab('problems')}
            className={`cursor-pointer uppercase text-[10px] tracking-widest ${activeTerminalTab === 'problems' ? 'border-b border-[var(--link)] text-[var(--foreground)] pb-1' : 'text-[var(--accent)] hover:text-[var(--foreground)]'}`}
          >Problems</span>
          <span 
            onClick={() => setActiveTerminalTab('output')}
            className={`cursor-pointer uppercase text-[10px] tracking-widest ${activeTerminalTab === 'output' ? 'border-b border-[var(--link)] text-[var(--foreground)] pb-1' : 'text-[var(--accent)] hover:text-[var(--foreground)]'}`}
          >Output</span>
          <span 
            onClick={() => setActiveTerminalTab('debug')}
            className={`cursor-pointer uppercase text-[10px] tracking-widest ${activeTerminalTab === 'debug' ? 'border-b border-[var(--link)] text-[var(--foreground)] pb-1' : 'text-[var(--accent)] hover:text-[var(--foreground)]'}`}
          >Debug Console</span>
          <span 
            onClick={() => setActiveTerminalTab('terminal')}
            className={`cursor-pointer uppercase text-[10px] tracking-widest ${activeTerminalTab === 'terminal' ? 'border-b border-[var(--link)] text-[var(--foreground)] pb-1' : 'text-[var(--accent)] hover:text-[var(--foreground)]'}`}
          >Terminal</span>
        </div>
        <div className="flex space-x-2">
          <button onClick={toggleTerminal} className="opacity-70 hover:opacity-100 cursor-pointer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="flex-1 overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
}
