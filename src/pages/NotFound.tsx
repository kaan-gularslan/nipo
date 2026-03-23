import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center py-20">
        <div className="text-center px-4">
          <div className="text-8xl font-black text-gradient-nipo mb-4">404</div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Sayfa Bulunamadı</h1>
          <p className="text-muted-foreground text-sm mb-8 max-w-md mx-auto">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Button asChild variant="outline" className="rounded-full gap-2">
              <Link to="/">
                <Home className="w-4 h-4" />
                Anasayfa
              </Link>
            </Button>
            <Button asChild className="rounded-full gap-2">
              <Link to="/urunler">
                <ArrowLeft className="w-4 h-4" />
                Ürünlere Dön
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
