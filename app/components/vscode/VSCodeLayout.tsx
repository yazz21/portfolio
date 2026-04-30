"use client";

import TitleBar from "./TitleBar";
import ActivityBar from "./ActivityBar";
import Sidebar from "./Sidebar";
import TabsBar from "./TabsBar";
import Terminal from "./Terminal";
import StatusBar from "./StatusBar";
import EditorContent from "./EditorContent";
import RightSidebar from "./RightSidebar";
import { VSCodeProvider } from "../../context/VSCodeContext";

export default function VSCodeLayout() {
  return (
    <VSCodeProvider>
      <div className="flex flex-col h-screen w-full bg-[var(--background)] text-[var(--foreground)] overflow-hidden font-mono text-sm transition-colors duration-300">
      {/* Top Title Bar */}
      <TitleBar />

      {/* Main Workspace */}
      <div className="flex flex-1 overflow-hidden">
        {/* Activity Bar (Thin left bar) */}
        <ActivityBar />

        {/* Sidebar (Explorer) */}
        <Sidebar />

        {/* Editor Area */}
        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Tabs */}
          <TabsBar />

          {/* Editor Content (Scrollable) */}
          <div className="flex-1 overflow-y-auto relative custom-scrollbar bg-[var(--background)]">
            <EditorContent />
          </div>

          {/* Bottom Panel (Terminal) */}
          <Terminal />
        </div>

        {/* Right Sidebar (LLM) */}
        <RightSidebar />
      </div>

      {/* Status Bar */}
      <StatusBar />
    </div>
    </VSCodeProvider>
  );
}
