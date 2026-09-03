import { Link, useLocation } from "react-router-dom";
import { Scale } from "lucide-react";

export default function Header() {
  const location = useLocation();

  const linkClass = (path: string) =>
    `text-sm font-medium transition-colors hover:text-primary-600 ${
      location.pathname === path ? "text-primary-600" : "text-gray-600"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center group-hover:bg-primary-700 transition-colors">
            <Scale className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg font-bold text-gray-900">
            GelijkBelonen<span className="text-primary-600">.nl</span>
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link to="/" className={linkClass("/")}>
            Home
          </Link>
          <a href="/#calculator" className={linkClass("/calculator")}>
            Calculator
          </a>
          <Link to="/over" className={linkClass("/over")}>
            Over ons
          </Link>
        </nav>
      </div>
    </header>
  );
}
