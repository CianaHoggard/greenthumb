from fastapi import Depends, APIRouter, HTTPException
from queries.plants import CategoryQueries
from typing import List, Union, Dict, Optional
from pydantic import BaseModel
from authenticator import authenticator


router = APIRouter()


class Plant(BaseModel):
    api_id: str
    img: str
    latin_name: str
    common_name: Union[List[str], None]
    climate: str


class PlantDetails(Plant):
    family: str
    temperature_max: Union[Dict[str, int], None]
    watering: str
    ideal_light: str
    insects: Union[List[str], None]


@router.get("/api/plants/categories/")
def get_all_categories(
    repo: CategoryQueries = Depends(),
    account_data: Optional[dict] = Depends(
        authenticator.try_get_current_account_data),
):
    if account_data:
        return repo.get_all_categories()
    else:
        raise HTTPException(status_code=404, detail="User not logged in")


@router.get("/api/plants/category/{category}/", response_model=List[Plant])
def get_one_category(
    category: str,
    repo: CategoryQueries = Depends(),
    account_data: Optional[dict] = Depends(
        authenticator.try_get_current_account_data),
):
    if account_data:
        return repo.get_one_category(category)
    else:
        raise HTTPException(status_code=404, detail="User not logged in")


@router.get("/api/plants/{id}/", response_model=PlantDetails)
def get_plant_details(
    id: str,
    repo: CategoryQueries = Depends(),
    account_data: Optional[dict] = Depends(
        authenticator.try_get_current_account_data),
    ):
    if account_data:
        return repo.get_plant_details(id)
    else:
        raise HTTPException(status_code=404, detail="User not logged in")
