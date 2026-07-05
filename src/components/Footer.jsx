import { Link } from "react-router-dom";

const SOCIAL_LINKS = [
  {
    label: "Twitter",
    path: "M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.6.8-2.6 1a4 4 0 0 0-6.9 3.7A11.5 11.5 0 0 1 3.6 4.7a4.1 4.1 0 0 0 1.3 5.4c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.2 4a4 4 0 0 1-1.8.1c.5 1.6 2 2.8 3.8 2.8A8 8 0 0 1 2 18.6a11.4 11.4 0 0 0 6.3 1.9c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1z",
  },
  {
    label: "Instagram",
    path: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM17.8 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z",
  },
  {
    label: "LinkedIn",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2 3.77-2 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.3-.02-3-1.83-3-1.83 0-2.1 1.43-2.1 2.9V21h-4V9z",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-neutral-800/40 bg-gradient-to-b from-neutral-900 to-neutral-950 text-neutral-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white">
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
              <span className="font-serif text-lg font-semibold text-white">
                Basera
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400">
              Discover and compare hotels across India — real-time pricing,
              ratings, and availability, all in one place.
            </p>

            <div className="mt-5 flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href="https://www.linkedin.com/in/swapnil-gupta-dev/"
                  aria-label={social.label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-neutral-700 text-neutral-400 transition hover:border-brand-500 hover:text-brand-400"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
              Explore
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link to="/" className="transition hover:text-white">
                  All Hotels
                </Link>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Top Rated Stays
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Budget Friendly
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Luxury Collection
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
              Company
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#" className="transition hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-neutral-400">
              <li className="flex items-start gap-2">
                <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 h-4 w-4 shrink-0 text-brand-500">
                  <path
                    d="M3 8l9 6 9-6M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                support@Basera.pvt.com
              </li>
              <li className="flex items-start gap-2">
                <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 h-4 w-4 shrink-0 text-brand-500">
                  <path
                    d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <circle cx="12" cy="9.5" r="2.2" stroke="currentColor" strokeWidth="1.8" />
                </svg>
                Rae-bareli, Uttar Pradesh, India
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-neutral-800/60 pt-6 text-xs text-neutral-500 sm:flex-row">
          <p>© {year} Basera. All rights reserved.</p>
          <p>
            Built with React, Vite &amp; Tailwind CSS · Data powered by{" "}
            <a
              href="https://demohotelsapi.pythonanywhere.com/"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-brand-400 hover:underline"
            >
              Hotel Search API
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}