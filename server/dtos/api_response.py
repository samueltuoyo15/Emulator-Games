from pydantic import BaseModel
from typing import Any, List, Optional 

class ApiResponseDTO(BaseModel):
    success: bool
    message: str
    data: Optional[List[Any]] = None