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
import DemoHepsiburada from "./pages/DemoHepsiburada";
import DemoBidolu from "./pages/DemoBidolu";
import DemoTrendyol from "./pages/DemoTrendyol";
import DemoAmazon from "./pages/DemoAmazon";
import DemoN11 from "./pages/DemoN11";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

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
            <Route path="/demo/hepsiburada" element={<DemoHepsiburada />} />
            <Route path="/demo/bidolu" element={<DemoBidolu />} />
            <Route path="/demo/trendyol" element={<DemoTrendyol />} />
            <Route path="/demo/amazon" element={<DemoAmazon />} />
            <Route path="/demo/n11" element={<DemoN11 />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
