export default function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 text-center text-sm text-neutral-500 sm:px-6 lg:px-8">
        Built with React, Vite &amp; Tailwind CSS · Data powered by{" "}
        <a
          href="https://demohotelsapi.pythonanywhere.com/"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-brand-600 hover:underline"
        >
          Hotel Search API
        </a>
      </div>
    </footer>
  );
}
