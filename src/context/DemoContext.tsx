import { createContext, useContext, ReactNode } from "react";
import { useParams } from "react-router-dom";

export type DemoTheme = "hepsiburada" | "bidolu" | "trendyol" | "amazon" | "n11";

interface DemoContextType {
  theme: DemoTheme;
  basePath: string;
  demoLink: (path: string) => string;
}

const DemoContext = createContext<DemoContextType | null>(null);

export const useDemo = (): DemoContextType => {
  const ctx = useContext(DemoContext);
  if (!ctx) throw new Error("useDemo must be used within DemoProvider");
  return ctx;
};

export const DemoProvider = ({ children }: { children: ReactNode }) => {
  const { theme } = useParams<{ theme: string }>();
  const validTheme = (["hepsiburada", "bidolu", "trendyol", "amazon", "n11"].includes(theme || "") ? theme : "bidolu") as DemoTheme;
  const basePath = `/demo/${validTheme}`;

  const demoLink = (path: string) => {
    if (path.startsWith("/demo/")) return path;
    if (path === "/") return basePath;
    return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
  };

  return (
    <DemoContext.Provider value={{ theme: validTheme, basePath, demoLink }}>
      {children}
    </DemoContext.Provider>
  );
};
