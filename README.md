# 🍁 MAPLE 2026 — Photobooth & Academic Burnout Assessment

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Live--Production-000000?style=for-the-badge&logo=vercel)](https://photoboothapp-maple2026.vercel.app)
[![GitHub Repository](https://img.shields.io/badge/GitHub-PHOTOBOOTHAPP--MAPLE2026-181717?style=for-the-badge&logo=github)](https://github.com/alchemist4real/PHOTOBOOTHAPP-MAPLE2026)
[![License: MIT](https://img.shields.io/badge/License-MIT-amber?style=for-the-badge)](LICENSE)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Supabase](https://img.shields.io/badge/Supabase-Cloud--Storage-3ECF8E?style=for-the-badge&logo=supabase)](https://supabase.com/)

> **Interactive Photobooth & Academic Burnout Assessment Web App for MAPLE 2026 by CIMSA Unsoed.**
> Designed with a curated **Zine Scrapbook & Y2K Aesthetic**, custom sticker gallery (93+ artworks), 4 coordinated template bundles, real-time Supabase cloud sync, and a stealth-protected Organizer Analytics Dashboard.

---

## ✨ Features Breakdown

### 🎞️ 1. Photobooth Studio & Interactive Decorator
- **Multi-Camera & Pose Capture**: Live webcam stream with pose countdowns, 3 retakes per slot, or custom image uploads.
- **Custom Sticker Gallery (93 Hand-Cleaned PNG Artworks)**:
  - 🎨 **Hand-Drawn Zine Art**: 18 vintage scrapbook motifs (crane bird, sardines, tomatoes, oranges, peppers).
  - 🐟 **Realistic Fish**: 18 high-resolution marine & freshwater fish species.
  - 🎭 **Reaction Memes**: 57 reaction memes across 3 curated subpacks.
- **Canvas Drag-and-Drop & Transform**: Full touch/mouse drag-and-drop, scale, rotation, layer ordering, and removal controls on an HTML5 Canvas generator.
- **Real-Time Camera Filters**: Normal, Black & White Film, Nightshot 📹, VHS Retro 📼, Pixelated 👾, Sepia, Pop Art, Warm Film.

### 📊 2. Academic Burnout Assessment & Report Card
- **5-Dimension Scientific Questionnaire**: Evaluates Academic Exhaustion, Cynicism, Efficacy, Study Stress, and Workload Overload.
- **Personalized Category Report**: Evaluates score percentages into Light, Moderate, or High Academic Burnout with tailored campus mental health advice.
- **High-Resolution Canvas Report Card**: Dynamically renders a printable burnout report card complete with user details, dimension score bars, and brand motifs.

### 🎨 3. Coordinated Template Bundles
Choose **one theme bundle** — it harmonizes both your **Photo Strip** AND **Burnout Report Card**:

| Bundle | Mood | Palette Swatches |
|---|---|---|
| 🍁 **Classic Maple** | Warm orange & cream | `#FFF6EE` • `#FF5722` • `#2A1B12` |
| 🍂 **Autumn Harvest** | Burgundy & forest gold | `#FFF5F0` • `#8B2252` • `#2D1B0E` |
| 🌅 **Sunrise Gold** | Golden amber & peach | `#FFFBF0` • `#D4A017` • `#3D2B1F` |
| 🌊 **Oceanic Teal** | Teal & warm coral | `#F0FAFA` • `#1A8A7D` • `#1A3A3A` |

### 🔒 4. Organizer Panel (Stealth Protected & Cloud Synced)
- **Zero Public Leak**: No visible admin buttons or plaintext password hints on public screens.
- **Stealth Access Gestures**:
  - `Ctrl + Shift + O` (or `Cmd + Shift + O` on Mac) anywhere on the web app.
  - 5 fast taps on the version text `v1.2.5` in the footer.
  - 5 fast taps on the welcome screen mascot badge.
- **SHA-256 Cryptographic Authentication**: PIN comparison uses client-side SHA-256 digests (`crypto.subtle.digest`) — no plaintext passwords in JS bundles.
- **Brute-Force Rate Limiting**: 60-second lockout after 5 consecutive failed attempts.
- **Real-Time Analytics & Directory**:
  - Cloud Synced assessment data across all kiosk devices via Supabase.
  - Category breakdown (Light, Moderate, High percentages).
  - Dimension average scores (1.0 - 5.0).
  - Searchable & filterable Respondent Directory table.
  - Export full CSV data for event reports.

---

## 🚀 Quick Start & Development

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` or `yarn`

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/alchemist4real/PHOTOBOOTHAPP-MAPLE2026.git
cd PHOTOBOOTHAPP-MAPLE2026

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

The app will start locally at `http://localhost:5173/`.

### Production Build

```bash
# Compile production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🛠️ Environment Variables

Copy `.env.example` to `.env.local` to configure custom Supabase storage keys or organizer hashes:

```bash
# Supabase Configuration
VITE_SUPABASE_URL=https://hdhvrlkizorscvehttzd.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_STORAGE_BUCKET=booth-photos

# Optional: Custom SHA-256 Hash for Organizer PIN
# VITE_ORGANIZER_PIN_HASH=your_custom_sha256_hash_here
```

> [!NOTE]
> Environment variables starting with `VITE_` are exposed to the client bundle as intended for Vite public keys.

---

## 📂 Project Architecture

```
PHOTOBOOTHAPP-MAPLE2026/
├── public/
│   ├── favicon.svg             # Hand-drawn zine star SVG favicon
│   └── stickers/               # Public sticker assets & manifests
│       ├── packs_manifest.json
│       ├── real_fish/          # 18 Realistic Fish PNGs
│       ├── memes_1/            # 15 Reaction Memes PNGs
│       ├── memes_2/            # 15 Reaction Memes PNGs
│       └── memes_3/            # 27 Reaction Memes PNGs
├── src/
│   ├── App.jsx                 # Core application state, screens, canvas generators & admin panel
│   ├── main.jsx                # React root entrypoint
│   └── index.css               # Design system tokens, fonts, animations & responsive utilities
├── index.html                  # HTML5 entrypoint with brand typography
├── package.json
└── vite.config.js
```

---

## 🎨 Design Tokens & Aesthetic Standard

- **Typography**: `Pixelta` (Display / Headers) + `Pixelify Sans` (Subheaders / Buttons / UI)
- **Palette**: Warm maple tones (`#FF5722`, `#FF7A3D`, `#FFF6EE`, `#3D2B1F`)
- **Card Styling**: Hard 2D offset shadows (`box-shadow: 3.5px 3.5px 0px #3D2B1F`), thick borders (`2.5px solid #3D2B1F`), rounded corners (`border-radius: 20px`).
- **Motifs**: Zine tape strips (`drawTapeStrip`), hand-drawn 5-point stars (`DoodleStarSvg`), film perforations (`drawFilmPerforations`).

---

## 📄 License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.

---

<p align="center">
  <b>MAPLE 2026 — CIMSA Unsoed</b><br/>
  Empowering Medical Students & Campus Mental Health Awareness.
</p>
