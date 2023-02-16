from pydantic import BaseModel
from queries.pool import pool



class FavoriteIn(BaseModel):
    user_id: str
    api_id: str

class FavoriteOut(FavoriteIn):
    id: str


class FavoritesQueries:
    def create_favorite(self, favorite: FavoriteIn) -> FavoriteOut:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO favorites
                            (user_id, api_id)
                        VALUES
                            (%s, %s)
                        RETURNING id;
                        """,
                        [
                            int(favorite.user_id),
                            favorite.api_id,
                        ],
                    )
                    id = result.fetchone()[0]
                    old_data = favorite.dict()
                    return FavoriteOut(
                        id=id,
                        **old_data
                    )
        except Exception:
            return {"message": "Unable to add to favorites"}

    def get_all_favorites(self, user_id: str):
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id, api_id
                        FROM favorites
                        WHERE user_id = %s
                        """,
                        [user_id]
                    )
                    record = result.fetchall()
                    return record
        except Exception:
            return {"message": "Could not get favorites"}

    def delete_favorite(self, id: int):
        try:
            with pool.connection() as conn:
                    with conn.cursor() as db:
                        result = db.execute(
                            """
                            DELETE FROM favorites
                            WHERE id = %s
                            """,
                            [id]
                        )
                        return True
        except Exception as e:
            return False