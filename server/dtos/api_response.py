from pydantic import BaseModel
from typing import Any, List, Optional , Dict

class ApiResponseDTO(BaseModel):
    success: bool
    message: str
    data: Optional[List[Any]] = None
    stats: Optional[Dict] = None