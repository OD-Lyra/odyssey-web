from fastapi import FastAPI

from core.config import Settings


settings = Settings()
app = FastAPI(title=settings.service_name)


@app.get("/health")
def health_check() -> dict[str, str]:
    return {"status": "ok"}

