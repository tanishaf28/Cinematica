const ANTHROPIC_URL = "https://api.anthropic.com/v1/messages";

function parseTitleArray(text) {
  if (!text) return [];

  try {
    const clean = text.replace(/```json|```/gi, "").trim();
    const parsed = JSON.parse(clean);
    if (Array.isArray(parsed)) {
      return parsed.map((item) => String(item).trim()).filter(Boolean).slice(0, 5);
    }
  } catch {
    // Fall back to quoted title extraction.
  }

  const matches = text.match(/"([^"]+)"/g);
  if (!matches) return [];

  return matches.map((s) => s.replace(/"/g, "").trim()).filter(Boolean).slice(0, 5);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "ANTHROPIC_API_KEY is not configured" });
  }

  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  const title = String(body.title || "").trim();
  const releaseDate = String(body.release_date || "").trim();
  const overview = String(body.overview || "").trim();
  const genres = Array.isArray(body.genres) ? body.genres.map((g) => String(g)) : [];

  if (!title) {
    return res.status(400).json({ error: "Missing movie title" });
  }

  const prompt = `You are a film expert. A user just watched "${title}" (${releaseDate.slice(0, 4) || ""}) - genres: ${genres.join(", ") || "unknown"}. Overview: ${overview.slice(0, 300)}\n\nList exactly 5 movie titles (different from "${title}") that a fan would love. Focus on similar themes, mood, style. Return ONLY a JSON array of 5 title strings, nothing else. Example: ["Movie One","Movie Two","Movie Three","Movie Four","Movie Five"]`;

  try {
    const response = await fetch(ANTHROPIC_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 300,
        messages: [{ role: "user", content: prompt }]
      })
    });

    const data = await response.json();
    if (!response.ok) {
      return res.status(response.status).json({ error: data?.error?.message || "Anthropic request failed" });
    }

    const text = data?.content?.[0]?.text || "";
    const titles = parseTitleArray(text);
    return res.status(200).json({ titles });
  } catch (error) {
    return res.status(502).json({ error: "Failed to fetch recommendations" });
  }
}
