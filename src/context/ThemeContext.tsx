"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface ThemeCtx {
  isDark: boolean;
  toggle: () => void;
}

export const ThemeContext = createContext<ThemeCtx>({ isDark: false, toggle: () => {} });

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("hop-theme");
    // Default is always light — only go dark if the user has explicitly chosen it
    const shouldBeDark = saved === "dark";
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
  }, []);

  const toggle = () => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("hop-theme", next ? "dark" : "light");
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
