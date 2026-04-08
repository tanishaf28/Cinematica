<div align="center">

<img src="https://capsule-render.vercel.app/api?type=venom&color=0:0a0a0f,50:1a0a2e,100:2d1b69&height=220&section=header&text=CINEMATICA&fontSize=80&fontColor=e040fb&animation=twinkling&fontAlignY=50&desc=AI-powered%20movie%20discovery%20%7C%20dark%20%7C%20cinematic%20%7C%20alive&descAlignY=72&descColor=b39ddb&descSize=16" width="100%"/>

<br/>

[![Live Demo](https://img.shields.io/badge/▶_WATCH_LIVE-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)](https://cinematica-beige.vercel.app/)
[![TMDB](https://img.shields.io/badge/Powered_by-TMDB-01b4e4?style=for-the-badge&logo=themoviedatabase&logoColor=white)](https://www.themoviedb.org/)
[![Anthropic](https://img.shields.io/badge/AI-Anthropic-6e56cf?style=for-the-badge&logo=anthropic&logoColor=white)](https://anthropic.com)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-e040fb?style=for-the-badge)](./LICENSE)

<br/>

> *Built to feel like a movie trailer : not a plain catalog.*

</div>

---

## 🎬 What Is Cinematica?

Cinematica is a **cinematic AI movie discovery web app** with a premium dark UI, animated landing experience, fast search, rich detail views, and dual recommendation engines all powered by **TMDB**, a **client-side KNN ML engine**, and **server-side AI routing** on Vercel.

No boring grids. No plain lists. Just vibes, velocity, and very good films.

---

## ✨ Why This Project Hits

```
🎞️  Cinematic intro splash + bold visual identity
🔥  Dynamic hero with featured movie rotation
📈  Trending, Top Rated, and category browsing
🔍  Search overlay with instant results
🎯  Detail pages with metadata + style-matched recommendations
⚡  Dual recommendation engines: ML (KNN) + AI (Anthropic)
🎲  "Surprise Me" : random discovery at one click
🔐  Server-side API routes keep your keys safe on Vercel
```

---

## Dual Recommendation Engines

### ⚡ ML-Powered (KNN + Cosine Similarity)
- Analyzes genres, ratings, popularity, recency
- Fast, deterministic, reproducible results
- Runs entirely client-side no external API calls needed

### 🤖 Anthropic-Powered (Claude Semantic)
- Creative, nuanced recommendations
- Understands plot context, themes, and mood
- Toggle instantly to compare both engines

---

## 🏗️ Live Architecture

```
┌──────────────────────────────────────────────────────┐
│                      BROWSER                         │
│              cinematica.html (SPA)                   │
│        HTML5 · CSS3 · Vanilla JavaScript             │
│                KNN Engine (client-side)              │
└───────────────────┬──────────────────────────────────┘
                    │ fetch()
           ┌────────▼────────┐
           │   VERCEL EDGE   │
           │  (serverless)   │
           └───┬─────────┬───┘
               │         │
      ┌────────▼──┐  ┌───▼─────────────────┐
      │ /api/tmdb │  │ /api/recommendations│
      │  TMDB_KEY │  │  ANTHROPIC_API_KEY  │
      └────────┬──┘  └───┬─────────────────┘
               │         │
      ┌────────▼──┐  ┌───▼─────────┐
      │  TMDB API │  │  Anthropic  │
      │  (movies) │  │  (AI recs)  │
      └───────────┘  └─────────────┘
```

> **Keys never touch the frontend.** Ever.

---

## 📁 Project Structure

```bash
cinematica/
├── 📄 cinematica.html          # Main app UI + all logic + KNN engine
├── 📄 index.html               # Root redirect → cinematica.html
└── api/
    ├── 🔐 tmdb.js              # TMDB proxy
    └── 🤖 recommendations.js   # Anthropic AI route
```

---

## 🚀 Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/tanishaf28/Cinematica.git
cd Cinematica

# 2. Start a local static server
python -m http.server 5500

# 3. Open in browser
open http://localhost:5500/cinematica.html
```

> ⚠️ **Note:** Local static mode skips the Vercel serverless routes.
> Anthropic recommendations won't work locally  but the **ML engine works perfectly offline**.
> For the full secure API flow, deploy to Vercel (see below).

---

## 🎨 Core UX Highlights

| Feature | Description |
|---|---|
| 🪟 Glass header | Sticky, branded, frosted always present |
| 🃏 Card hover FX | Rich animations on every grid entry |
| 📊 Confidence meters | Match scores visualized (0–100%) |
| ⚡ Engine toggle | Switch between ML and Anthropic instantly |
| 🔍 Search-first | Overlay search, instant response |
| 📱 Mobile-friendly | Responsive layout throughout |

---

## 🎮 How to Use

### 1. Browse Movies
- **Home** → See trending & top-rated
- **Popular/Latest/Top Rated** → Browse by category
- **Search** → Type to find specific movies

### 2. Filter Results
- Click **genre chip** → Filter to that genre
- Select **year** → Only movies from that year
- Select **rating** → Minimum rating threshold
- Combine filters! (Genre + Year + Rating all work together)

### 3. View Details
- Click any movie card → Full detail page
- See metadata: director, runtime, votes, budget

### 4. Get Recommendations
- On detail page, scroll to recommendations section
- **Icons:**  ML Match = KNN &nbsp;|&nbsp; 🤖 AI Match = Anthropic Claude
- Click **"Switch to Anthropic"** / **"Switch to ML"** to toggle engines
- Filter recommendations by genre

### 5. Surprise Me
- Click **"✦ Surprise Me"** → Random movie loaded instantly

---

## 🎓 How the ML Engine Works

### 1. Feature Extraction
```javascript
movie features = {
  genre_Action: 1,        // one-hot encoded
  genre_Drama: 0,
  genre_Comedy: 1,
  rating: 0.78,           // 7.8/10 normalized
  popularity: 0.62,       // log scale
  recency: 0.95,          // recent year bias
  vote_count: 0.88        // confidence weight
}
```

### 2. Cosine Similarity
```
similarity = dot_product(vec1, vec2) / (magnitude(vec1) × magnitude(vec2))
range: 0 (completely different) to 1 (identical)
```

### 3. K-Nearest Neighbors
```
1. Calculate similarity between query and all 100+ movies
2. Sort descending by similarity
3. Return top 10
4. Map to match % (similarity × 100)
```

---

## 🛠️ Built With

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/Vanilla_JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TMDB](https://img.shields.io/badge/TMDB_API-01b4e4?style=for-the-badge&logo=themoviedatabase&logoColor=white)
![Anthropic](https://img.shields.io/badge/Anthropic_API-6e56cf?style=for-the-badge&logo=anthropic&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>

| Layer | Tech |
|-------|------|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **Data** | TMDB API (Movie Database) |
| **ML Engine** | Client-side KNN + Cosine Similarity |
| **AI Engine** | Anthropic Claude API |
| **Hosting** | Vercel (Serverless Functions) |
| **UI Framework** | Custom CSS (no framework) |

---

## 🗺️ Roadmap

- [ ] watchlist syncing
- [ ] Genre mood presets  `noir` · `cozy` · `intense` · `mind-bender`
- [ ] Trailer panel + cast deep links
- [ ] Keyboard shortcuts (⌘K for search, etc.)
- [ ] Dark/Light theme toggle
- [ ] Multi-language support
- [ ] Observability + request-rate limits on API routes

---

## 📄 License

MIT : fork it, make it louder, bolder, and even more cinematic.

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0a0a0f,50:1a0a2e,100:2d1b69&height=80&section=footer" width="100%"/>

*"Beyond movies. Intelligent recommendations, cinematic journeys."*

</div>
