from pydantic import BaseModel
from queries.pool import pool


class FavoriteIn(BaseModel):
    api_id: str
    user_id: str


class FavoriteOut(FavoriteIn):
    id: str


class FavoritesQueries:
    def create_favorite(self, api_id, account_id) -> FavoriteOut:
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
                            int(account_id),
                            api_id,
                        ],
                    )
                    id = result.fetchone()[0]
                    return FavoriteOut(
                        id=id, api_id=api_id, user_id=account_id
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
                        [user_id],
                    )
                    record = result.fetchall()
                    return record
        except Exception:
            return {"message": "Could not get favorites"}

    def delete_favorite(self, id: int):
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM favorites
                        WHERE id = %s
                        """,
                        [id],
                    )
                    return True
        except Exception:
            return False
