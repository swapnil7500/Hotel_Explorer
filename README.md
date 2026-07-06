<div align="center">

# 🏨 Basera — Hotel Search & Discovery Platform

A sleek, responsive hotel search and discovery web app that lets users explore, filter, and compare hotels across India in real time.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

[Live Demo](#) · [Report Bug](#) · [Request Feature](#)

</div>

---

## 📖 Overview

**Basera** is a full-featured hotel discovery interface built as a real-world frontend engineering exercise. It consumes a live REST API to deliver search, multi-filter querying, sorting, and pagination across 500+ hotel listings — all wrapped in a polished, hospitality-industry-inspired UI.

The goal wasn't just to hit an API and render a list — it was to design something that feels like a product a real travel company would ship: considered typography, a cohesive dark/light theme, loading and empty states, and an information-dense filter panel that stays usable on mobile.

## ✨ Features

- 🔍 **Smart search** — debounced search-as-you-type across hotel name and city
- 🏙️ **Multi-filter querying** — city, price range, and minimum rating, all combinable
- ↕️ **Sorting** — by price (low↔high) or rating (low↔high)
- 📄 **Pagination** — clean page-by-page browsing of results
- 🖼️ **Hotel detail pages** — full photo gallery with thumbnail navigation
- 📱 **Fully responsive** — mobile-first layout that scales cleanly to desktop
- ⏳ **Thoughtful states** — skeleton loaders, empty-result messaging, and graceful error handling
- 🎨 **Custom design system** — dark-themed navbar/footer, warm brand palette, and a hero section with image overlay

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 (Vite) |
| Language | JavaScript (ES2022+) |
| Styling | Tailwind CSS 3 |
| Routing | React Router 7 |
| HTTP Client | Axios |
| Data Source | [Hotel Search API](https://demohotelsapi.pythonanywhere.com/) |

## 📁 Project Structure

```
src/
├── api/
│   └── hotelApi.js         # Axios client + all API calls (list, filter, get-by-id)
├── components/
│   ├── Navbar.jsx           # Branded top navigation
│   ├── Footer.jsx           # Multi-column footer with contact & links
│   ├── HotelCard.jsx        # Listing card
│   ├── HotelCardSkeleton.jsx# Loading skeleton
│   ├── FilterBar.jsx        # Search + filters + sort panel
│   ├── Pagination.jsx       # Page navigation controls
│   └── StarRating.jsx       # Reusable rating display
├── hooks/
│   └── useDebouncedValue.js # Debounce hook for live search
├── pages/
│   ├── Home.jsx              # Main listing page
│   ├── HotelDetail.jsx        # Single hotel + photo gallery
│   └── NotFound.jsx           # 404 page
├── App.jsx                   # Route definitions
└── main.jsx                   # App entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/swapnil7500/Hotel_Explorer.git
cd Hotel_Explorer/hotel-explorer
npm install
```

### Run locally

```bash
npm run dev
```

App will be available at `http://localhost:5173`.

### Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

## 🔌 API Reference

Base URL: `https://demohotelsapi.pythonanywhere.com/hotels/`

| Query Param | Description |
|---|---|
| `search` | Search by hotel name or city |
| `location` | Filter by exact city |
| `min_price` / `max_price` | Price range filter |
| `min_rating` / `max_rating` | Rating range filter |
| `order_by` | Sort field (`price`, `-price`, `rating`, `-rating`) |
| `limit` / `skip` | Pagination controls |

Full API docs: [demohotelsapi.pythonanywhere.com](https://demohotelsapi.pythonanywhere.com/)

## 🗺️ Roadmap

- [ ] Wishlist / saved hotels (local storage)
- [ ] User authentication + booking history
- [ ] Map view for search results
- [ ] Dark mode toggle

## 🤝 Contributing

This is a personal academic/portfolio project, but suggestions and issues are welcome — feel free to open an issue or fork it.

## 📄 License

Distributed under the MIT License. See `LICENSE` for details.

## 👤 Author

**Swapnil**
B.Tech CSE, Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad
GitHub: [@swapnil7500](https://github.com/swapnil7500) · LeetCode: [swapnil7500](https://leetcode.com/swapnil7500)

---

<div align="center">
Built with ❤️ using React, Vite & Tailwind CSS
</div>