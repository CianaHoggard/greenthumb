from fastapi.testclient import TestClient
from main import app
from queries.favorites import FavoritesQueries
from authenticator import authenticator

client = TestClient(app)


def fake_get_current_account_data():
    return {"id": 99, "username": "fakeuser"}


class FakeFavoritesQueries:
    def get_all_favorites(self, id):
        return []


def test_get_all_favorites():
    # Arrange
    app.dependency_overrides[FavoritesQueries] = FakeFavoritesQueries
    app.dependency_overrides[
        authenticator.try_get_current_account_data
    ] = fake_get_current_account_data
    access_token = "valid_access_token"
    headers = {"Authorization": f"Bearer {access_token}"}
    # Act
    response = client.get("/api/account/favorites/", headers=headers)
    data = response.json()

    # Assert
    assert response.status_code == 200
    assert isinstance(data, list)
