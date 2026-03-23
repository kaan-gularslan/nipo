import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

const Breadcrumb = ({ items }: { items: BreadcrumbItem[] }) => (
  <nav aria-label="Breadcrumb" className="py-3">
    <ol className="flex items-center gap-1.5 text-xs text-muted-foreground flex-wrap">
      <li>
        <Link to="/" className="flex items-center gap-1 hover:text-primary transition-smooth">
          <Home className="w-3 h-3" />
          Anasayfa
        </Link>
      </li>
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-1.5">
          <ChevronRight className="w-3 h-3" />
          {item.href ? (
            <Link to={item.href} className="hover:text-primary transition-smooth">{item.label}</Link>
          ) : (
            <span className="text-foreground font-medium">{item.label}</span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumb;
