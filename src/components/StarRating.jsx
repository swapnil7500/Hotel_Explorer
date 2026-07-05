export default function StarRating({ rating, size = "text-sm" }) {
  const rounded = Math.round(rating);
  return (
    <div className={`flex items-center gap-1 ${size}`}>
      <div className="flex text-amber-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>{i < rounded ? "★" : "☆"}</span>
        ))}
      </div>
      <span className="font-medium text-neutral-700">{rating.toFixed(1)}</span>
    </div>
  );
}
