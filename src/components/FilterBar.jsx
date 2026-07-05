import { LOCATIONS } from "../api/hotelApi";

export default function FilterBar({ filters, onChange, onReset }) {
  const handle = (key) => (e) => onChange({ ...filters, [key]: e.target.value });

  const labelClass =
    "mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-neutral-500";
  const inputClass =
    "w-full rounded-lg border border-neutral-200 bg-neutral-50/60 px-3 py-2.5 text-sm text-neutral-800 transition focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20";

  return (
    <div className="relative overflow-hidden rounded-2xl border border-neutral-200/80 bg-white/80 p-5 shadow-lg shadow-neutral-200/50 backdrop-blur-md sm:p-6">
      {/* subtle top accent bar */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-500 via-amber-400 to-brand-700" />

      <div className="mb-4 flex items-center gap-2">
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-brand-600">
          <path
            d="M4 6h16M7 12h10M10 18h4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
          Refine your search
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {/* Search */}
        <div className="lg:col-span-2">
          <label className={labelClass}>
            <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Search
          </label>
          <input
            type="text"
            placeholder="e.g. Regal Crescent, Goa"
            value={filters.search}
            onChange={handle("search")}
            className={inputClass}
          />
        </div>

        {/* Location */}
        <div>
          <label className={labelClass}>
            <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
              <path
                d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle cx="12" cy="9.5" r="2.2" stroke="currentColor" strokeWidth="2" />
            </svg>
            City
          </label>
          <select
            value={filters.location}
            onChange={handle("location")}
            className={inputClass}
          >
            <option value="">All cities</option>
            {LOCATIONS.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* Price range */}
        <div>
          <label className={labelClass}>₹ Min price</label>
          <input
            type="number"
            min="0"
            placeholder="1000"
            value={filters.min_price}
            onChange={handle("min_price")}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>₹ Max price</label>
          <input
            type="number"
            min="0"
            placeholder="10000"
            value={filters.max_price}
            onChange={handle("max_price")}
            className={inputClass}
          />
        </div>

        {/* Sort */}
        <div>
          <label className={labelClass}>
            <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
              <path
                d="M3 7h18M6 12h12M9 17h6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Sort by
          </label>
          <select
            value={filters.order_by}
            onChange={handle("order_by")}
            className={inputClass}
          >
            <option value="">Relevance</option>
            <option value="price">Price: Low to High</option>
            <option value="-price">Price: High to Low</option>
            <option value="-rating">Rating: High to Low</option>
            <option value="rating">Rating: Low to High</option>
          </select>
        </div>
      </div>

      {/* Rating range + reset */}
      <div className="mt-5 flex flex-wrap items-end justify-between gap-4 border-t border-neutral-100 pt-4">
        <div>
          <label className={labelClass}>
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5 text-amber-400">
              <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.8L6 21l1.6-7L2.2 9.2l7.1-.6z" />
            </svg>
            Min rating
          </label>
          <select
            value={filters.min_rating}
            onChange={handle("min_rating")}
            className={`${inputClass} w-32`}
          >
            <option value="">Any</option>
            {[2, 2.5, 3, 3.5, 4, 4.5].map((r) => (
              <option key={r} value={r}>
                {r}+
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={onReset}
          className="rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm font-semibold text-neutral-600 shadow-sm transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
        >
          Reset filters
        </button>
      </div>
    </div>
  );
}