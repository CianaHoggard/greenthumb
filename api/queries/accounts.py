from pydantic import BaseModel
from queries.pool import pool


class DuplicateAccountError(ValueError):
    pass


class AccountIn(BaseModel):
    name: str
    email: str
    password: str


class AccountOut(BaseModel):
    id: str
    name: str
    email: str


class AccountOutWithPassword(AccountOut):
    hashed_password: str


class AccountQueries:

    def get(self, email: str) -> AccountOutWithPassword:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id
                            , name
                            , email
                            , hashed_password
                        FROM accounts
                        WHERE email = %s
                        """,
                        [email],
                    )
                    record = result.fetchone()
                    if record is None:
                        return None
                    return AccountOutWithPassword(
                        id=record[0],
                        name=record[1],
                        email=record[2],
                        hashed_password=record[3],
                    )
        except Exception:
            return {"message": "Could not get account"}

    def get_all_accounts(self):
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id
                            , name
                            , email
                        FROM accounts
                        """
                    )
                    record = result.fetchall()
                    return record
        except Exception:
            return {"message": "Could not get account"}

    def create(self,
               account: AccountIn,
               hashed_password: str) -> AccountOutWithPassword:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO accounts
                            (name, email, hashed_password)
                        VALUES
                            (%s, %s, %s)
                        RETURNING id;
                        """,
                        [
                            account.name,
                            account.email,
                            hashed_password,
                        ],
                    )
                    id = result.fetchone()[0]
                    old_data = account.dict()
                    return AccountOutWithPassword(
                        id=id,
                        hashed_password=hashed_password,
                        **old_data,
                    )
        except Exception:
            return {"message": "Unable to create user"}
