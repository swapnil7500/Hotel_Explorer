import { LOCATIONS } from "../api/hotelApi";

export default function FilterBar({ filters, onChange, onReset }) {
  const handle = (key) => (e) => onChange({ ...filters, [key]: e.target.value });

  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-neutral-200 sm:p-5">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6">
        {/* Search */}
        <div className="lg:col-span-2">
          <label className="mb-1 block text-xs font-medium text-neutral-500">
            Search by name or city
          </label>
          <input
            type="text"
            placeholder="e.g. Regal Crescent, Goa"
            value={filters.search}
            onChange={handle("search")}
            className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          />
        </div>

        {/* Location */}
        <div>
          <label className="mb-1 block text-xs font-medium text-neutral-500">
            City
          </label>
          <select
            value={filters.location}
            onChange={handle("location")}
            className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
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
          <label className="mb-1 block text-xs font-medium text-neutral-500">
            Min price (₹)
          </label>
          <input
            type="number"
            min="0"
            placeholder="1000"
            value={filters.min_price}
            onChange={handle("min_price")}
            className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-neutral-500">
            Max price (₹)
          </label>
          <input
            type="number"
            min="0"
            placeholder="10000"
            value={filters.max_price}
            onChange={handle("max_price")}
            className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          />
        </div>

        {/* Sort */}
        <div>
          <label className="mb-1 block text-xs font-medium text-neutral-500">
            Sort by
          </label>
          <select
            value={filters.order_by}
            onChange={handle("order_by")}
            className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
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
      <div className="mt-3 flex flex-wrap items-end justify-between gap-3">
        <div className="flex flex-wrap gap-3">
          <div>
            <label className="mb-1 block text-xs font-medium text-neutral-500">
              Min rating
            </label>
            <select
              value={filters.min_rating}
              onChange={handle("min_rating")}
              className="rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
            >
              <option value="">Any</option>
              {[2, 2.5, 3, 3.5, 4, 4.5].map((r) => (
                <option key={r} value={r}>
                  {r}+
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={onReset}
          className="rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-600 transition hover:bg-neutral-100"
        >
          Reset filters
        </button>
      </div>
    </div>
  );
}
