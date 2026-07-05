import { useEffect, useMemo, useState } from "react";
import { getHotels } from "../api/hotelApi";
import HotelCard from "../components/HotelCard";
import HotelCardSkeleton from "../components/HotelCardSkeleton";
import FilterBar from "../components/FilterBar";
import Pagination from "../components/Pagination";
import useDebouncedValue from "../hooks/useDebouncedValue";

const PAGE_SIZE = 12;

const DEFAULT_FILTERS = {
  search: "",
  location: "",
  min_price: "",
  max_price: "",
  min_rating: "",
  order_by: "",
};

export default function Home() {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const debouncedSearch = useDebouncedValue(filters.search, 400);

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    setError(null);

    getHotels({
      search: debouncedSearch,
      location: filters.location,
      min_price: filters.min_price,
      max_price: filters.max_price,
      min_rating: filters.min_rating,
      order_by: filters.order_by,
    })
      .then((data) => {
        if (!ignore) setHotels(data.data || []);
      })
      .catch(() => {
        if (!ignore) setError("Couldn't load hotels. Please try again in a moment.");
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [
    debouncedSearch,
    filters.location,
    filters.min_price,
    filters.max_price,
    filters.min_rating,
    filters.order_by,
  ]);

  // reset to page 1 whenever filters change
  useEffect(() => {
    setPage(1);
  }, [
    debouncedSearch,
    filters.location,
    filters.min_price,
    filters.max_price,
    filters.min_rating,
    filters.order_by,
  ]);

  const totalPages = Math.max(1, Math.ceil(hotels.length / PAGE_SIZE));
  const visibleHotels = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return hotels.slice(start, start + PAGE_SIZE);
  }, [hotels, page]);

  const handleReset = () => setFilters(DEFAULT_FILTERS);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero */}
      <div className="mb-8 rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 px-6 py-10 text-white sm:px-10 sm:py-14">
        <h1 className="text-3xl font-bold sm:text-4xl">
          Find your next stay, anywhere in India
        </h1>
        <p className="mt-2 max-w-xl text-brand-50/90">
          Search {hotels.length > 0 ? hotels.length : "hundreds of"} hotels by
          city, price, and rating — updated live from the Hotel Search API.
        </p>
      </div>

      <FilterBar filters={filters} onChange={setFilters} onReset={handleReset} />

      {/* Results meta */}
      <div className="mt-6 flex items-center justify-between text-sm text-neutral-500">
        <span>
          {loading
            ? "Searching hotels…"
            : `${hotels.length} hotel${hotels.length === 1 ? "" : "s"} found`}
        </span>
        {!loading && hotels.length > 0 && (
          <span>
            Page {page} of {totalPages}
          </span>
        )}
      </div>

      {/* Error state */}
      {error && (
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Grid */}
      <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {loading &&
          Array.from({ length: 8 }).map((_, i) => <HotelCardSkeleton key={i} />)}

        {!loading &&
          !error &&
          visibleHotels.map((hotel) => <HotelCard key={hotel.id} hotel={hotel} />)}
      </div>

      {/* Empty state */}
      {!loading && !error && hotels.length === 0 && (
        <div className="mt-16 flex flex-col items-center gap-2 text-center">
          <span className="text-4xl">🏨</span>
          <p className="text-lg font-semibold text-neutral-700">
            No hotels match your filters
          </p>
          <p className="text-sm text-neutral-500">
            Try widening your price range or clearing the search.
          </p>
          <button
            onClick={handleReset}
            className="mt-3 rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600"
          >
            Reset filters
          </button>
        </div>
      )}

      {!loading && !error && (
        <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
      )}
    </div>
  );
}
