<div align="center">

<img src="https://capsule-render.vercel.app/api?type=venom&color=0:0a0a0f,50:1a0a2e,100:2d1b69&height=220&section=header&text=CINEMATICA&fontSize=80&fontColor=e040fb&animation=twinkling&fontAlignY=50&desc=AI-powered%20movie%20discovery%20%7C%20dark%20%7C%20cinematic%20%7C%20alive&descAlignY=72&descColor=b39ddb&descSize=16" width="100%"/>

<br/>

[![Live Demo](https://img.shields.io/badge/▶_WATCH_LIVE-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)](https://cinematica-6yrldxx6q-tanishaf28s-projects.vercel.app)
[![TMDB](https://img.shields.io/badge/Powered_by-TMDB-01b4e4?style=for-the-badge&logo=themoviedatabase&logoColor=white)](https://www.themoviedb.org/)
[![Anthropic](https://img.shields.io/badge/AI-Anthropic-6e56cf?style=for-the-badge&logo=anthropic&logoColor=white)](https://anthropic.com)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-e040fb?style=for-the-badge)](./LICENSE)

<br/>

> *Built to feel like a movie trailer : not a plain catalog.*

</div>

---

## 🎬 What Is Cinematica?

Cinematica is a **cinematic AI movie discovery web app** with a premium dark UI, animated landing experience, fast search, rich detail views, and recommendation flows  all powered by **TMDB** and **server-side AI routing** on Vercel.

No boring grids. No plain lists. Just vibes, velocity, and very good films.

---

## ✨ Why This Project Hits

```
🎞️  Cinematic intro splash + bold visual identity
🔥  Dynamic hero with featured movie rotation
📈  Trending, Top Rated, and category browsing
🔍  Search overlay with instant results
🎯  Detail pages with metadata + style-matched recommendations
🎲  "Surprise Me" : random discovery at one click
🔐  Server-side API routes keep your keys safe on Vercel
```

---

## 🏗️ Live Architecture

```
┌─────────────────────────────────────────────┐
│                  BROWSER                    │
│         cinematica.html (SPA)               │
│   HTML5 · CSS3 · Vanilla JavaScript         │
└───────────────┬─────────────────────────────┘
                │ fetch()
        ┌───────▼────────┐
        │  VERCEL EDGE   │
        │  (serverless)  │
        └───┬────────┬───┘
            │        │
   ┌────────▼──┐  ┌──▼──────────────────┐
   │ /api/tmdb │  │ /api/recommendations │
   │  TMDB_KEY │  │  ANTHROPIC_API_KEY   │
   └────────┬──┘  └──┬──────────────────┘
            │        │
   ┌────────▼──┐  ┌──▼──────────┐
   │  TMDB API │  │ Anthropic   │
   │  (movies) │  │ (AI recs)   │
   └───────────┘  └─────────────┘
```

> **Keys never touch the frontend.** Ever.

---

## 📁 Project Structure

```bash
cinematica/
├── 📄 cinematica.html          # Main app UI + all logic
├── 📄 index.html               # Root redirect → cinematica.html
└── api/
    ├── 🔐 tmdb.js              # TMDB proxy
    └── 🤖 recommendations.js   # AI route
```

---

##  Run Locally

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
> For the full secure API flow, deploy to Vercel (see below).

---

##  Deploy on Vercel

```bash
# 1. Push to GitHub
git push origin main

# 2. Import repo at vercel.com/new

# 3. Add environment variables in Project Settings:
```

| Variable | Where to get it |
|---|---|
| `TMDB_KEY` | [themoviedb.org/settings/api](https://www.themoviedb.org/settings/api) |
| `ANTHROPIC_API_KEY` | [console.anthropic.com](https://console.anthropic.com) |

```bash
# 4. Redeploy : done. Requests now route through:
#    /api/tmdb
#    /api/recommendations
```

---

## 🎨 Core UX Highlights

| Feature | Description |
|---|---|
| 🪟 Glass header | Sticky, branded, frosted  always present |
| 🃏 Card hover FX | Rich animations on every grid entry |
| 📊 Confidence meters | AI recommendation scores visualized |
| 🔍 Search-first | Overlay search, instant response |
| 📱 Mobile-friendly | Responsive layout behavior throughout |

---

## 🗺️ Roadmap

- [ ] Login + watchlist syncing
- [ ] Genre mood presets  `noir` · `cozy` · `intense` · `mind-bender`
- [ ] Trailer panel + cast deep links
- [ ] Keyboard shortcuts for search & quick navigation
- [ ] Observability + request-rate limits on API routes

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

---

## 📄 License

MIT : fork it, make it louder, bolder, and even more cinematic.

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0a0a0f,50:1a0a2e,100:2d1b69&height=80&section=footer" width="100%"/>

*“Beyond movies. Intelligent recommendations, cinematic journeys.”*

</div>
