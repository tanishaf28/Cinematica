const TMDB_BASE_URL = "https://api.themoviedb.org/3";

function pickFirst(value) {
  return Array.isArray(value) ? value[0] : value;
}

function isAllowedPath(path) {
  if (!path || typeof path !== "string") return false;
  if (!path.startsWith("/")) return false;
  if (path.startsWith("//")) return false;
  if (path.includes("..")) return false;
  if (path.includes("://")) return false;

  const allowedPrefixes = ["/movie/", "/trending/movie/", "/genre/movie/", "/search/movie"];
  return allowedPrefixes.some((prefix) => path.startsWith(prefix));
}

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.TMDB_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "TMDB_KEY is not configured" });
  }

  const tmdbPath = pickFirst(req.query.path);
  if (!isAllowedPath(tmdbPath)) {
    return res.status(400).json({ error: "Invalid or disallowed path" });
  }

  const url = new URL(TMDB_BASE_URL + tmdbPath);
  url.searchParams.set("api_key", apiKey);
  url.searchParams.set("language", "en-US");

  Object.entries(req.query).forEach(([key, rawValue]) => {
    if (key === "path") return;
    const value = pickFirst(rawValue);
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.set(key, String(value));
    }
  });

  try {
    const response = await fetch(url.toString());
    const text = await response.text();

    res.status(response.status);
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    return res.send(text);
  } catch (error) {
    return res.status(502).json({ error: "Failed to fetch from TMDB" });
  }
}
