from dataclasses import dataclass


@dataclass(frozen=True)
class Settings:
    service_name: str = "odyssey-app"

