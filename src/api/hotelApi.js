import axios from "axios";

const BASE_URL = "https://demohotelsapi.pythonanywhere.com";

const client = axios.create({
  baseURL: BASE_URL,
});

/**
 * Fetch hotels with optional filters.
 * Supported params (all optional): location, price, min_price, max_price,
 * rating, min_rating, max_rating, search, limit, skip, order_by
 */
export async function getHotels(params = {}) {
  // strip out empty/undefined values so we don't send junk query params
  const cleanParams = Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) => value !== "" && value !== undefined && value !== null
    )
  );

  const response = await client.get("/hotels/", { params: cleanParams });
  return response.data; // { status, count, returned, message, data: [...] }
}

/**
 * Fetch a single hotel by id.
 * Tries the dedicated /hotels/<id>/ endpoint first; if that doesn't return
 * a usable object (some mock APIs are inconsistent here), falls back to
 * fetching the full list and finding the hotel client-side.
 */
export async function getHotelById(id) {
  try {
    const response = await client.get(`/hotels/${id}/`);
    const payload = response.data?.data ?? response.data;
    if (payload && payload.id) return payload;
  } catch (_err) {
    // fall through to list-based lookup below
  }

  const all = await getHotels();
  const found = all.data?.find((h) => String(h.id) === String(id));
  if (!found) throw new Error("Hotel not found");
  return found;
}

export const LOCATIONS = [
  "Ahmedabad",
  "Bengaluru",
  "Chennai",
  "Delhi",
  "Goa",
  "Gurgaon",
  "Hyderabad",
  "Jaipur",
  "Kolkata",
  "Mumbai",
  "Noida",
  "Pune",
];
