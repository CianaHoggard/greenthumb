from fastapi import Depends, APIRouter
from queries.plants import CategoryQueries
from typing import List, Union, Dict
from pydantic import BaseModel



router = APIRouter()

class Plant(BaseModel):
    api_id: str
    img: str
    latin_name: str
    common_name: Union[List[str], None]
    use: List[str]
    blooming_season: Union[str, None]
    color_of_blooms: Union[str, None]
    climate: str
    pruning: str


class PlantDetails(Plant):
    family: str
    temperature_max: Union[Dict[str, int], None]
    watering: str
    ideal_light: str
    insects: Union[List[str], None]




@router.get("/api/plants/categories/")
def get_all_categories(
    repo: CategoryQueries = Depends()
):
    return repo.get_all_categories()


@router.get("/api/plants/category/{category}/", response_model=List[Plant])
def get_one_category(
    category: str,
    repo: CategoryQueries = Depends()
):
    return repo.get_one_category(category)


@router.get("/api/plants/{id}/", response_model = PlantDetails)
def get_plant_details(
    id: str,
    repo: CategoryQueries = Depends()
):
    return repo.get_plant_details(id)