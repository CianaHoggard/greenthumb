from fastapi.testclient import TestClient
from main import app
from queries.plants import CategoryQueries
from authenticator import authenticator

client = TestClient(app)


def fake_get_current_account_data():
    return {"id": 99, "username": "fakeuser"}


class CategoryQueriesMock:
    def get_plant_details(self, id: str):
        return {
            "api_id": id,
            "img": "http://www.tropicopia.com/house-plant/thumbnails/5501.jpg",
            "latin_name": "Bougainvillea 'Pink Purple'",
            "common_name": ["Bougainvillia", "Paper flower"],
            "climate": "Tropical",
            "family": "Nyctaginaceae",
            "temperature_max": {"F": 89, "C": 32},
            "watering": "Keep moist between watering & Water when soil is half dry",
            "ideal_light": "Full sun (+21,500 lux /+2000 fc )",
            "insects": ["Aphid", "Mealy bug"],
            "color_of_leaf": ["Medium green"],
            "color_of_blooms": "Purple",
            "blooming_season": "Spring / Summer",
            "pruning": "After blooming",
        }


def test_get_plant_details():
    # Arrange
    app.dependency_overrides[CategoryQueries] = CategoryQueriesMock
    app.dependency_overrides[
        authenticator.try_get_current_account_data
    ] = fake_get_current_account_data
    access_token = "valid_access_token"
    headers = {"Authorization": f"Bearer {access_token}"}
    # Act
    response = client.get(
        "/api/plants/aebf3bea-09fe-5279-a11d-2d00eb2d55f3/",
        headers=headers,
    )
    data = response.json()
    # Assert
    assert response.status_code == 200
    assert data["api_id"] == "aebf3bea-09fe-5279-a11d-2d00eb2d55f3"
    assert isinstance(data, dict)
    assert data == {
        "api_id": "aebf3bea-09fe-5279-a11d-2d00eb2d55f3",
        "img": "http://www.tropicopia.com/house-plant/thumbnails/5501.jpg",
        "latin_name": "Bougainvillea 'Pink Purple'",
        "common_name": ["Bougainvillia", "Paper flower"],
        "climate": "Tropical",
        "family": "Nyctaginaceae",
        "temperature_max": {"F": 89, "C": 32},
        "watering": "Keep moist between watering & Water when soil is half dry",
        "ideal_light": "Full sun (+21,500 lux /+2000 fc )",
        "insects": ["Aphid", "Mealy bug"],
        "color_of_leaf": ["Medium green"],
        "color_of_blooms": "Purple",
        "blooming_season": "Spring / Summer",
        "pruning": "After blooming",
    }
