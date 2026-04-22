# Odyssey — Manifesto V10.4

> Source of truth for architecture, product intent, and operating rules.

## Separation of Intelligence (Brain) vs Execution (Engine)

- **Brain**: AI logic, decision-making, prompts, policies, scoring, and IP.
- **Engine**: deterministic execution (media processing, FFmpeg pipelines, MediaPipe, rendering).

## Strict English Rule

All variables, filenames, module names, and comments must be in **English** for global scalability.

## TODO

Paste the full Manifesto V10.4 content here.

# 🏛️ ODYSSEY-Lyra TECHNICAL CONSTITUTION (V10.4)

`/callout`ℹ️

**STATUS: ABSOLUTE REFERENCEVersion:** 10.4 (The Sovereign Edition)
**Date:** Feb 5, 2026
**Scope:** Architecture, Privacy (Law 25), & Stack.

# 1. DOCUMENT: THE MANIFESTO

## 1. Vision & Business Model

Odyssey is the "Emotional Engine" and "Trojan Horse" for **LYRA**.

- **M&A Strategy:** Build a "Deep Tech" asset (Data/Social Graph).
- **Black Box:** We provide API services but retain 100% IP/Source Code.
- **Value Loop:** Attention (Video) -> Data (Brain) -> Lyra Hub (Services).

## 2. Engineering Prime Directives

1. **NO DELETE POLICY (Smart Pacing):** Never censor based on quality. Use "Archive Mode" (B&W + Blur) for low scores.
2. **CONTEXT IS KING:** Inject text (Obituary) into the Vision model. If `Text="Sailing"` matches `Image="Boat"`, boost score by 1.5x.
3. **STRICT ENGLISH:** Codebase, Comments, and Variables must be in English ONLY to ensure global scalability.

## 3. The Algorithm (Maths)

$$
Score_{photo} = (Face \cdot 0.4) + (Emotion \cdot 0.3) + (Sharpness \cdot 0.2) + (ContextMatch \cdot 0.1)
$$

$$
Score_{video} = \frac{\sum Faces_{size}}{T_{segment}} \cdot Stability
$$

## 4. Media Pipeline Strategy (Proxy First)

**Goal:** Zero Latency. We NEVER work on raw files in memory.

1. **Ingestion:** Immediate conversion to Proxy (1080p, H.264, **Same Framerate**).
2. **Lifecycle:** Hot Storage (30 days) -> Cold Storage (Glacier).
3. **Delivery:** HLS Adaptive Streaming from Proxy.

## 5. Tech Stack (War Machine)

- **Frontend:** Next.js 14 + Tailwind + Lovable UI.
- **Backend:** Python 3.11+ (FastAPI).
- **Data:** Supabase (PostgreSQL + pgvector).
- **AI:** MediaPipe + CLIP + Librosa.

### 5.1. Required Packages

`fastapi`, `uvicorn`, `supabase`, `mediapipe`, `opencv-python-headless`, `librosa`, `ffmpeg-python`.

## 6. Project Tree (The Map)

This structure strictly separates Intelligence (Brain) from Execution (Engine).

```
/odyssey-monorepo
 ├── /app (Backend - Python/FastAPI)
 │   ├── /brain              # INTELLIGENCE (The Asset - IP)
 │   │   ├── vectorizer.py   # CLIP/Embedding
 │   │   ├── pacemaker.py    # Smart Pacing Logic
 │   │   └── profiler.py     # Graph Builder
 │   ├── /engine             # FACTORY (The Worker)
 │   │   ├── ffmpeg.py       # Rendering Wrapper
 │   │   ├── ingestion.py    # Proxy Generator
 │   │   └── analyzer.py     # MediaPipe + Librosa
 │   ├── /graphql            # API Interface
 │   └── /core               # Config & Security
 ├── /web (Frontend - Next.js)
 └── /docs                   # Documentation
```

## 7. Data Strategy (Law 25 / GDPR)

- **🔒 The Vault (Hidden):** PII, Names, Raw Footage. **NEVER SOLD.**
- **🏭 The Refinery:** AI extracts anonymous patterns (vectors).
- **💰 The Market (Sold):** Aggregated insights (e.g., "Crowd size trends", "Religious rites stats").

## 8. Tier Logic (The Cash Register)

| Tier | Tokens | Price | Style | Lyra Data Objective (CRM) |
| --- | --- | --- | --- | --- |
| **ESSENTIAL** | 0.5 | $49 | Sober, Constant | **Lead Gen:** Identify the Payer & Date. |
| **TRIBUTE** | 1.0 | $99 | Pulse, Smart Ducking | **Social Graph:** Identify Contributors. |
| **LEGACY** | 2.0 | $199 | Narrative, Docu | **Emotional Graph:** Religion, Tastes, Rites. |

# **9. TECHNICAL FILES (APPENDICES)**

```markdown
# ODYSSEY SOVEREIGN PROTOCOL (V10.4)

## 1. ROLE & PERSONA
You are the **Co-Founder & CTO** of Odyssey Video Inc.
* **Goal:** Build a "Black Box" emotional video engine that is M&A ready.
* **Mindset:** "Unicorn-Scale". Clean code, idempotency.

## 2. THE CONSTITUTION
**CRITICAL:** You must read `docs/MANIFESTO.md` before writing code.

## 3. PRIME DIRECTIVES (ABSOLUTE LAWS)
1.  **NO DELETE POLICY:** Use Smart Pacing instead of deletion.
2.  **PROXY FIRST PROTOCOL:** Never process raw files. Use Mezzanine/Proxy.
3.  **DATA FIREWALL:** Separate "Vault" (Raw) from "Asset" (Insights). Never log PII.
4.  **HYBRID COMMERCE:** Check Org ID. `0000...` = Stripe (B2C). Others = Tokens (B2B).

## 4. FOLDER AUTHORITY
* `app/brain`: Intelligence (Python)
* `app/engine`: Factory/Execution (FFmpeg/MediaPipe)
* `app/graphql`: Interface
* `app/core`: Config

## 5. EXECUTION FLOW
1. Check Money (Stripe vs Token)
2. Check Data (Vault vs Market)
3. Check Media (Proxy vs Master)
4. Check Structure (Brain vs Engine)
```

```python
[project]
name = "odyssey-engine"
version = "0.1.0"
description = "Odyssey Video Inc. - Emotional Video Engine"
authors = [{name = "Odyssey Team", email = "tech@odyssey.com"}]
requires-python = ">=3.11"
dependencies = [
    "fastapi>=0.109.0",
    "uvicorn[standard]>=0.27.0",
    "pydantic>=2.6.0",
    "supabase>=2.3.0",
    "mediapipe>=0.10.9",
    "opencv-python-headless>=4.9.0", # SERVER SAFE
    "librosa>=0.10.1",
    "strawberry-graphql>=0.219.0",
    "python-multipart>=0.0.9",
    "pgvector>=0.2.4",
    "ffmpeg-python>=0.2.0"
]

[tool.ruff]
line-length = 88
target-version = "py311"

[tool.mypy]
strict = true
```

```bash
# --- ODYSSEY MEDIA SAFETY ---
*.mp4
*.mov
*.mp3
*.wav
*.raw

# Except public web assets
!web/public/*.mp4

# Storage & Temp
/storage_mount/
/temp/
/proxies/
local_storage/

# --- PYTHON ---
__pycache__/
.env
.venv
```
