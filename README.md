# HotelExplorer 🏨

A responsive hotel search & discovery web app built for the internship final assignment. It consumes the [Hotel Search API](https://demohotelsapi.pythonanywhere.com/) and lets users search, filter, sort, and browse 500+ hotels across India.

## Features

- 🔍 Search hotels by name or city
- 🏙️ Filter by city, price range, and minimum rating
- ↕️ Sort by price (low↔high) or rating (low↔high)
- 📄 Pagination through results
- 🖼️ Hotel detail page with a full photo gallery
- 📱 Fully responsive, clean UI (mobile → desktop)
- ⏳ Loading skeletons, empty states, and error handling

## Tech Stack

- **React** (Vite) — plain JavaScript (no TypeScript)
- **Tailwind CSS** — styling
- **React Router** — client-side routing
- **Axios** — API requests

## Project Structure

```
src/
├── api/
│   └── hotelApi.js        # All API calls (list, filter, get by id)
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── HotelCard.jsx
│   ├── HotelCardSkeleton.jsx
│   ├── FilterBar.jsx
│   ├── Pagination.jsx
│   └── StarRating.jsx
├── hooks/
│   └── useDebouncedValue.js
├── pages/
│   ├── Home.jsx            # Listing page (search/filter/sort/paginate)
│   ├── HotelDetail.jsx      # Single hotel detail + gallery
│   └── NotFound.jsx
├── App.jsx                 # Routes
└── main.jsx                 # Entry point
```

## Getting Started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build
npm run preview    # preview the production build locally
```

## API Reference

Base URL: `https://demohotelsapi.pythonanywhere.com/hotels/`

Supported query params: `location`, `price`, `min_price`, `max_price`, `rating`, `min_rating`, `max_rating`, `search`, `limit`, `skip`, `order_by`.

Full docs: https://demohotelsapi.pythonanywhere.com/
