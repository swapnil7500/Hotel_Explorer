import { Link } from "react-router-dom";
import StarRating from "./StarRating";

export default function HotelCard({ hotel }) {
  const price = Number(hotel.price);

  return (
    <Link
      to={`/hotels/${hotel.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-neutral-200 transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative h-48 w-full overflow-hidden bg-neutral-100">
        <img
          src={hotel.thumbnail}
          alt={hotel.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700 shadow">
          {hotel.location}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="line-clamp-2 text-base font-semibold text-neutral-900">
          {hotel.name}
        </h3>

        <StarRating rating={hotel.rating} />

        <p className="line-clamp-2 text-sm text-neutral-500">
          {hotel.description}
        </p>

        <div className="mt-auto flex items-end justify-between pt-2">
          <div>
            <span className="text-lg font-bold text-neutral-900">
              ₹{price.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
            </span>
            <span className="text-xs text-neutral-500"> / night</span>
          </div>
          <span className="rounded-lg bg-brand-500 px-3 py-1.5 text-xs font-semibold text-white transition group-hover:bg-brand-600">
            View
          </span>
        </div>
      </div>
    </Link>
  );
}
