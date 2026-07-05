import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getHotelById } from "../api/hotelApi";
import StarRating from "../components/StarRating";

export default function HotelDetail() {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [activePhoto, setActivePhoto] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    setError(null);
    setActivePhoto(0);

    getHotelById(id)
      .then((data) => {
        if (!ignore) setHotel(data);
      })
      .catch(() => {
        if (!ignore) setError("Couldn't load this hotel. It may not exist.");
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-16 text-center text-neutral-500">
        Loading hotel details…
      </div>
    );
  }

  if (error || !hotel) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-16 text-center">
        <p className="text-lg font-semibold text-neutral-700">
          {error || "Hotel not found"}
        </p>
       <Link
        to="/"
        className="group mb-6 inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-700 shadow-sm transition hover:border-brand-500 hover:bg-brand-50 hover:text-brand-700 hover:shadow-md"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-4 w-4 transition group-hover:-translate-x-0.5"
        >
          <path
            d="M19 12H5M11 18l-6-6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Back to 
      </Link>
      </div>
    );
  }

  const photos = hotel.photos?.length ? hotel.photos : [hotel.thumbnail];
  const price = Number(hotel.price);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        to="/"
        className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-neutral-500 hover:text-brand-600"
      >
        ← Back to search
      </Link>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        {/* Gallery */}
        <div className="lg:col-span-3">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-neutral-100">
            <img
              src={photos[activePhoto]}
              alt={`${hotel.name} photo ${activePhoto + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {photos.map((photo, idx) => (
              <button
                key={idx}
                onClick={() => setActivePhoto(idx)}
                className={`h-16 w-20 shrink-0 overflow-hidden rounded-lg ring-2 transition ${
                  idx === activePhoto ? "ring-brand-500" : "ring-transparent"
                }`}
              >
                <img
                  src={photo}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="lg:col-span-2">
          <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
            {hotel.location}
          </span>
          <h1 className="mt-3 text-2xl font-bold text-neutral-900 sm:text-3xl">
            {hotel.name}
          </h1>

          <div className="mt-2">
            <StarRating rating={hotel.rating} size="text-base" />
          </div>

          <div className="mt-5 rounded-2xl border border-neutral-200 p-5">
            <div className="flex items-baseline justify-between">
              <span className="text-3xl font-bold text-neutral-900">
                ₹{price.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
              </span>
              <span className="text-sm text-neutral-500">per night</span>
            </div>
            <button
              className="mt-4 w-full rounded-xl bg-brand-500 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
              onClick={() =>
                alert(
                  "This is a demo booking flow — no real reservation is made."
                )
              }
            >
              Book Now
            </button>
            <p className="mt-2 text-center text-xs text-neutral-400">
              Free cancellation · No payment required to reserve
            </p>
          </div>

          <div className="mt-6">
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-500">
              About this hotel
            </h2>
            <p className="text-sm leading-relaxed text-neutral-600">
              {hotel.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
