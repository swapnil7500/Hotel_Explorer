import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center">
      <span className="text-5xl">🧭</span>
      <h1 className="mt-4 text-2xl font-bold text-neutral-900">
        Page not found
      </h1>
      <p className="mt-2 text-neutral-500">
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-6 rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600"
      >
        Back to home
      </Link>
    </div>
  );
}
