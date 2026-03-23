import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { products, formatPrice } from "@/data/products";

const SearchBar = ({ className = "", mobile = false }: { className?: string; mobile?: boolean }) => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const results = query.trim().length >= 2
    ? products.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.categoryLabel.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 6)
    : [];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <Input
        placeholder={mobile ? "Ürün arayın..." : "Ürün, kategori veya marka arayın..."}
        value={query}
        onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
        onFocus={() => setOpen(true)}
        className={mobile
          ? "pr-10 rounded-xl bg-muted/50"
          : "pr-12 h-11 rounded-xl border-border/60 bg-muted/50 text-sm focus:bg-card focus:border-primary/30 transition-smooth placeholder:text-muted-foreground/60"
        }
      />
      {query ? (
        <button
          onClick={() => { setQuery(""); setOpen(false); }}
          className={mobile
            ? "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            : "absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg text-muted-foreground hover:text-foreground transition-smooth"
          }
        >
          <X className="w-4 h-4" />
        </button>
      ) : (
        !mobile && (
          <button className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth" aria-label="Ara">
            <Search className="w-4 h-4" />
          </button>
        )
      )}
      {mobile && !query && <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />}

      {/* Results dropdown */}
      {open && query.trim().length >= 2 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-xl shadow-nipo-lg z-50 overflow-hidden animate-fade-in">
          {results.length === 0 ? (
            <div className="px-4 py-6 text-center text-sm text-muted-foreground">
              "{query}" için sonuç bulunamadı.
            </div>
          ) : (
            <>
              {results.map((p) => (
                <Link
                  key={p.id}
                  to={`/urunler/${p.slug}`}
                  className="flex items-center gap-3 px-4 py-2.5 hover:bg-muted transition-smooth border-b border-border/30 last:border-0"
                  onClick={() => { setQuery(""); setOpen(false); }}
                >
                  <img src={p.img} alt={p.name} className="w-10 h-10 rounded-lg object-cover shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-foreground truncate">{p.name}</div>
                    <div className="text-[10px] text-muted-foreground">{p.categoryLabel}</div>
                  </div>
                  <span className="text-xs font-bold text-primary shrink-0">{formatPrice(p.price)}</span>
                </Link>
              ))}
              <Link
                to="/urunler"
                className="block px-4 py-2.5 text-xs font-bold text-primary text-center bg-muted/30 hover:bg-muted transition-smooth"
                onClick={() => { setQuery(""); setOpen(false); }}
              >
                Tüm ürünleri gör →
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
