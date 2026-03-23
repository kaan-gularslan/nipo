import { Outlet } from "react-router-dom";
import { DemoProvider, useDemo } from "@/context/DemoContext";
import { HepsiburadaHeader, HepsiburadaFooter } from "./headers/HepsiburadaHeader";
import { BidoluHeader, BidoluFooter } from "./headers/BidoluHeader";
import { TrendyolHeader, TrendyolFooter } from "./headers/TrendyolHeader";
import { AmazonHeader, AmazonFooter } from "./headers/AmazonHeader";
import { N11Header, N11Footer } from "./headers/N11Header";

const DemoLayoutInner = () => {
  const { theme } = useDemo();

  const headers: Record<string, React.FC> = {
    hepsiburada: HepsiburadaHeader,
    bidolu: BidoluHeader,
    trendyol: TrendyolHeader,
    amazon: AmazonHeader,
    n11: N11Header,
  };

  const footers: Record<string, React.FC> = {
    hepsiburada: HepsiburadaFooter,
    bidolu: BidoluFooter,
    trendyol: TrendyolFooter,
    amazon: AmazonFooter,
    n11: N11Footer,
  };

  const HeaderComp = headers[theme] || BidoluHeader;
  const FooterComp = footers[theme] || BidoluFooter;

  return (
    <div className="min-h-screen bg-background">
      <HeaderComp />
      <Outlet />
      <FooterComp />
    </div>
  );
};

const DemoLayout = () => (
  <DemoProvider>
    <DemoLayoutInner />
  </DemoProvider>
);

export default DemoLayout;
