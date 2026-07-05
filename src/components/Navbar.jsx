import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-800/40 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 shadow-lg backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-sm">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5 text-white"
            >
              <path
                d="M3 21V9.5L12 4l9 5.5V21"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.5 21v-6a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div className="leading-tight">
            <span className="block font-serif text-xl font-semibold tracking-tight text-white">
              Sojourn
            </span>
            <span className="block text-[11px] font-medium uppercase tracking-[0.15em] text-amber-200/70">
              Stays &amp; Retreats
            </span>
          </div>
        </Link>

       <nav className="flex items-center gap-6 text-sm font-medium text-neutral-300">
          <Link to="/" className="transition hover:text-white">
            Explore
          </Link>
        </nav>
      </div>
    </header>
  );
}