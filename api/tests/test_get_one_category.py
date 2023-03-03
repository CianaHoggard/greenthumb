from fastapi.testclient import TestClient
from main import app
from queries.plants import CategoryQueries
from authenticator import authenticator

client = TestClient(app)


def fake_get_current_account_data():
    return {"id": 99, "username": "fakeuser"}


class FakeCategoryQueries:
    def get_one_category(self, category: str):
        return []


def test_get_one_category():
    # Arrange
    app.dependency_overrides[CategoryQueries] = FakeCategoryQueries
    app.dependency_overrides[
        authenticator.try_get_current_account_data
    ] = fake_get_current_account_data
    access_token = "valid_access_token"
    headers = {"Authorization": f"Bearer {access_token}"}
    # Act
    response = client.get("/api/plants/categories/", headers=headers)
    data = response.json()

    # Assert
    assert response.status_code == 200
    assert isinstance(data, list)
