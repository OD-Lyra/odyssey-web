# Odyssey Monorepo

This repository is organized as a monorepo:

- `web/`: Next.js 14 (App Router) frontend
- `app/`: Python 3.11 + FastAPI backend
- `docs/`: Product/architecture documentation (Manifesto V10.4)

## Quickstart

### Web

```bash
cd web
npm install
npm run dev
```

### App

```bash
cd app
python3.11 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

