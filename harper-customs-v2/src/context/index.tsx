"use client";
import { createContext, useContext, useState } from "react";

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: {
  children: React.ReactNode;
}) {
  let [activePage, setActivePage] = useState("Home");
  return (
    <AppContext.Provider value={{
      activePage,
      setActivePage
    }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext);
}