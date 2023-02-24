from fastapi import Depends, APIRouter, HTTPException
from queries.favorites import FavoritesQueries
from typing import Optional
from pydantic import BaseModel
from authenticator import authenticator


class Favorite(BaseModel):
    user_id: str
    api_id: str
    id: str


router = APIRouter()


@router.post("/api/account/favorites/")
def create_favorite(
    api_id: str,
    account_data=Depends(authenticator.try_get_current_account_data),
    repo: FavoritesQueries = Depends(),
):
    if account_data:
        return repo.create_favorite(api_id, account_data["id"])
    else:
        raise HTTPException(status_code=404, detail="User not logged in")


@router.get("/api/account/favorites/")
def get_favorites(
    account_data=Depends(authenticator.try_get_current_account_data),
    repo: FavoritesQueries = Depends(),
):
    if account_data:
        return repo.get_all_favorites(account_data["id"])
    else:
        raise HTTPException(status_code=404, detail="User not logged in")


@router.delete("/api/account/favorites/{id}/", response_model=bool)
def delete_favorite(
    id: int,
    account_data: Optional[dict] = Depends(
        authenticator.try_get_current_account_data
    ),
    repo: FavoritesQueries = Depends(),
) -> bool:
    if account_data:
        return repo.delete_favorite(id)
    else:
        raise HTTPException(status_code=404, detail="User not logged in")
