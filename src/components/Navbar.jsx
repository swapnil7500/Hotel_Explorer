import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-500 text-lg font-bold text-white">
            H
          </span>
          <span className="text-lg font-bold tracking-tight text-neutral-900">
            HotelExplorer
          </span>
        </Link>

        <nav className="flex items-center gap-4 text-sm font-medium text-neutral-600">
          <Link to="/" className="transition hover:text-brand-600">
            Explore
          </Link>
          <a
            href="https://demohotelsapi.pythonanywhere.com/"
            target="_blank"
            rel="noreferrer"
            className="hidden transition hover:text-brand-600 sm:inline"
          >
            API Docs
          </a>
        </nav>
      </div>
    </header>
  );
}
