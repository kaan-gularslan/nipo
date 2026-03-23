import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/context/CartContext";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Category from "./pages/Category";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Campaigns from "./pages/Campaigns";
import Cart from "./pages/Cart";
import StaticPage from "./pages/StaticPage";
import CorporateIdentity from "./pages/CorporateIdentity";
import DemoLayout from "./components/demo/DemoLayout";
import DemoHepsiburada from "./pages/DemoHepsiburada";
import DemoBidolu from "./pages/DemoBidolu";
import DemoTrendyol from "./pages/DemoTrendyol";
import DemoAmazon from "./pages/DemoAmazon";
import DemoN11 from "./pages/DemoN11";
import DemoProducts from "./pages/demo/DemoProducts";
import DemoCategory from "./pages/demo/DemoCategory";
import DemoProductDetail from "./pages/demo/DemoProductDetail";
import DemoCart from "./pages/demo/DemoCart";
import DemoCampaigns from "./pages/demo/DemoCampaigns";
import DemoContact from "./pages/demo/DemoContact";
import DemoFaq from "./pages/demo/DemoFaq";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const demoHomeMap: Record<string, React.FC> = {
  hepsiburada: DemoHepsiburada,
  bidolu: DemoBidolu,
  trendyol: DemoTrendyol,
  amazon: DemoAmazon,
  n11: DemoN11,
};

import { useParams } from "react-router-dom";

const DemoIndex = () => {
  const { theme } = useParams();
  const Home = demoHomeMap[theme || "bidolu"] || DemoBidolu;
  return <Home />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/urunler" element={<Products />} />
            <Route path="/urunler/:slug" element={<ProductDetail />} />
            <Route path="/kategori/:slug" element={<Category />} />
            <Route path="/kurumsal" element={<About />} />
            <Route path="/sss" element={<Faq />} />
            <Route path="/iletisim" element={<Contact />} />
            <Route path="/kampanyalar" element={<Campaigns />} />
            <Route path="/sepet" element={<Cart />} />
            <Route path="/kargo-bilgileri" element={<StaticPage page="kargo" />} />
            <Route path="/iade-kosullari" element={<StaticPage page="iade" />} />
            <Route path="/gizlilik" element={<StaticPage page="gizlilik" />} />
            <Route path="/kvkk" element={<StaticPage page="kvkk" />} />
            <Route path="/kurumsal-kimlik" element={<CorporateIdentity />} />
            
            {/* Demo nested routes */}
            <Route path="/demo/:theme" element={<DemoLayout />}>
              <Route index element={<DemoIndex />} />
              <Route path="urunler" element={<DemoProducts />} />
              <Route path="urunler/:slug" element={<DemoProductDetail />} />
              <Route path="kategori/:slug" element={<DemoCategory />} />
              <Route path="sepet" element={<DemoCart />} />
              <Route path="kampanyalar" element={<DemoCampaigns />} />
              <Route path="iletisim" element={<DemoContact />} />
              <Route path="sss" element={<DemoFaq />} />
              <Route path="kurumsal" element={<DemoFaq />} />
              <Route path="kargo-bilgileri" element={<DemoFaq />} />
              <Route path="iade-kosullari" element={<DemoFaq />} />
              <Route path="gizlilik" element={<DemoFaq />} />
            </Route>

            <Route path="/admin" element={<Admin />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
