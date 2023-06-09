import os
from fastapi import Depends, APIRouter
from jwtdown_fastapi.authentication import Authenticator
from queries.accounts import (
    AccountQueries,
    AccountOut,
    AccountIn,
    AccountOutWithPassword)

router = APIRouter()


class AccountAuthenticator(Authenticator):
    async def get_account_data(
        self,
        email: str,
        accounts: AccountQueries,
    ):
        # Use your repo to get the account based on the
        # email
        return accounts.get(email)

    def get_account_getter(
        self,
        accounts: AccountQueries = Depends(),
    ):
        # Return the accounts. That's it.
        return accounts

    def get_hashed_password(self, account: AccountOutWithPassword):
        # Return the encrypted password value from your
        # account object
        return account.hashed_password

    def get_account_data_for_cookie(self, account: AccountIn):
        # Return the email and the data for the cookie.
        # You must return TWO values from this method.
        return account.email, AccountOut(**account.dict())


authenticator = AccountAuthenticator(os.environ["SIGNING_KEY"])
