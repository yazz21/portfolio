"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export interface Tab {
  id: string;
  title: string;
}

interface VSCodeContextType {
  openTabs: Tab[];
  activeTab: string;
  isSidebarOpen: boolean;
  sidebarView: "explorer" | "search" | "source-control" | "extensions";
  searchQuery: string;
  activeTerminalTab: "problems" | "output" | "debug" | "terminal";
  isRightSidebarOpen: boolean;
  isTerminalOpen: boolean;
  openTab: (id: string, title: string) => void;
  closeTab: (id: string) => void;
  setActiveTab: (id: string) => void;
  toggleSidebar: () => void;
  setSidebarView: (view: "explorer" | "search" | "source-control" | "extensions") => void;
  setSearchQuery: (query: string) => void;
  setActiveTerminalTab: (tab: "problems" | "output" | "debug" | "terminal") => void;
  toggleRightSidebar: () => void;
  toggleTerminal: () => void;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const VSCodeContext = createContext<VSCodeContextType | undefined>(undefined);

export function VSCodeProvider({ children }: { children: ReactNode }) {
  const [openTabs, setOpenTabs] = useState<Tab[]>([{ id: "page", title: "page.tsx" }]);
  const [activeTab, setActiveTab] = useState<string>("page");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [sidebarView, setSidebarView] = useState<"explorer" | "search" | "source-control" | "extensions">("explorer");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTerminalTab, setActiveTerminalTab] = useState<"problems" | "output" | "debug" | "terminal">("terminal");
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openTab = (id: string, title: string) => {
    if (!openTabs.find((tab) => tab.id === id)) {
      setOpenTabs([...openTabs, { id, title }]);
    }
    setActiveTab(id);
  };

  const closeTab = (id: string) => {
    const newTabs = openTabs.filter((tab) => tab.id !== id);
    setOpenTabs(newTabs);
    
    if (activeTab === id) {
      if (newTabs.length > 0) {
        setActiveTab(newTabs[newTabs.length - 1].id);
      } else {
        setActiveTab(""); 
      }
    }
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleRightSidebar = () => setIsRightSidebarOpen(!isRightSidebarOpen);
  const toggleTerminal = () => setIsTerminalOpen(!isTerminalOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <VSCodeContext.Provider
      value={{
        openTabs,
        activeTab,
        isSidebarOpen,
        sidebarView,
        searchQuery,
        activeTerminalTab,
        isRightSidebarOpen,
        isTerminalOpen,
        openTab,
        closeTab,
        setActiveTab,
        toggleSidebar,
        setSidebarView,
        setSearchQuery,
        setActiveTerminalTab,
        toggleRightSidebar,
        toggleTerminal,
        isMobileMenuOpen,
        toggleMobileMenu,
      }}
    >
      {children}
    </VSCodeContext.Provider>
  );
}

export function useVSCode() {
  const context = useContext(VSCodeContext);
  if (context === undefined) {
    throw new Error("useVSCode must be used within a VSCodeProvider");
  }
  return context;
}
