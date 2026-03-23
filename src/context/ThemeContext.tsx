import React, { createContext, useContext, useState, useEffect } from "react";

export type ThemeName = "klasik" | "pembe" | "yesil" | "minimal" | "koyu";

interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "klasik",
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const themeLabels: Record<ThemeName, string> = {
  klasik: "Nipo Klasik",
  pembe: "Pembe Pazar",
  yesil: "Yeşil Atölye",
  minimal: "Mavi Minimal",
  koyu: "Koyu Nipo",
};

export const themeColors: Record<ThemeName, string> = {
  klasik: "hsl(205, 100%, 22.7%)",
  pembe: "hsl(347, 100%, 63.5%)",
  yesil: "hsl(77, 55%, 49.8%)",
  minimal: "hsl(205, 100%, 30%)",
  koyu: "hsl(205, 100%, 12%)",
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeName>(() => {
    const stored = localStorage.getItem("nipo-theme");
    return (stored as ThemeName) || "klasik";
  });

  useEffect(() => {
    localStorage.setItem("nipo-theme", theme);
    if (theme === "klasik") {
      delete document.documentElement.dataset.theme;
    } else {
      document.documentElement.dataset.theme = theme;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
