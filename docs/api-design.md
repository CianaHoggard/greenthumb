### Log in

- Endpoint path: /token
- Endpoint method: POST

- Request shape (form):

  - username: string
  - password: string

- Response: Account information and a token
- Response shape (JSON):
  ```json
  {
    "account": {
      «key»: type»,
    },
    "token": string
  }
  ```

### Log out

- Endpoint path: /token
- Endpoint method: DELETE

- Headers:

  - Authorization: Bearer token

- Response: Always true
- Response shape (JSON):
  ```json
  true
  ```

### Sign Up

- Endpoint path: /signup
- Endpoint method: POST
- Query parameters:

  - «name»: «purpose»

- Headers:
  Authorization: Bearer
- Response: Details of User
- Response shape:

  ```json
  {

        "signup": [
          {
            "name": string,
            "email": string,
            "username": string,
            "password": List/string,
            "confirm_password": string,
            }
        ]
  }
  ```

### Get all Categories

- Endpoint path: /plants-categories
- Endpoint method: GET
- Query parameters:

- Headers:

  - X-RapidAPI-Key: Your Key
  - X-RapidAPI-Host: house-plants2.p.rapidapi.com
  - Authorization: Bearer token

- Response: Details of all plants
- Response shape:

  ```json
  {

        "Category": [
          {
            "Category": string,
        }
    ]
  }
  ```

### Get all plants by categories

- Endpoint path: /plants-categories/{Category}
- Endpoint method: GET
- Query parameters:

- Headers:

  - X-RapidAPI-Key: Your Key
  - X-RapidAPI-Host: house-plants2.p.rapidapi.com
  - Authorization: Bearer token

- Response: Details of all plants
- Response shape:

  ```json
  {

        "Category": [
          {
            "Common name": string,
            "id": string,
            "Color of bloom": string,
            "Climat": string,
            "Use": List/string,
            "Pruning": List/string,
            "Latin Name": List/string,
            "Blooming Season": List/string,
        }
    ]
  }
  ```

### Get plant by id from

- Endpoint path: /plants-categories/{id}
- Endpoint method: GET
- Query parameters:

- Headers:

  - X-RapidAPI-Key: Your Key
  - X-RapidAPI-Host: house-plants2.p.rapidapi.com
  - Authorization: Bearer token

- Response: Details of all plants
- Response shape:

  ```json
  {
      "plant_details": [
        {
          "Common name": string,
          "Latin name":string,
          "id":string,
          "Temperature max": object/number,
          "Watering": string,
          "Color of bloom": string,
          "Insects": List/string,
          "Climat": string,
          "Use": List/string,
      }
  ]
  }

  ```

### Show All Plants

- Endpoint path: /plants
- Endpoint method: GET
- Query parameters:

  - «name»: «purpose»

- Headers:

  - X-RapidAPI-Key: Your Key
  - X-RapidAPI-Host: house-plants2.p.rapidapi.com

- Response: Details of all plants
- Response shape:

  ```json
  {

        "plant_details": [
          {
            "Common name": string,
            "Color of bloom": string,
            "Climat": string,
            "Use": List/string,
            "Pruning": List/string,
            "Latin Name": List/string,
            "Blooming Season": List/string,
        }
    ]
  }
  ```

### Show plant details

- Endpoint path: /plants/details/{id}
- Endpoint method: GET
- Query parameters:

  - «name»: «purpose»

- Headers:

  - X-RapidAPI-Key: Your Key
  - X-RapidAPI-Host: house-plants2.p.rapidapi.com

- Response: Details of specific plant

- Response shape:

  ```json
  {

        "plant_details": [
          {
            "Common name": string,
            "Temperature max": object/number,
            "Watering": string,
            "Color of bloom": string,
            "Insects": List/string,
            "Climat": string,
            "Use": List/string,
        }
    ]
  }
  ```

### Favorite plants

- Endpoint path: /favorites
- Endpoint method: POST

- Headers:

  - X-RapidAPI-Key: Your Key
  - X-RapidAPI-Host: house-plants2.p.rapidapi.com
  - Authorization: Bearer token

- Response: Details of specific plant
- Response shape:

````json
  {
    "plant_id": string,
    "user_id": int,
    "id":int,
  }
-Request body:
```json
{
  "plant_id": string,
}
````

### Unfavorite a plant

- Endpoint path: /favorites/{id}
- Endpoint method: DELETE

- Headers:
  - X-RapidAPI-Key: Your Key
  - X-RapidAPI-Host: house-plants2.p.rapidapi.com
  - Authorization: Bearer token
- Response: Details of specific plant
- Response shape:
  -Request body:

```
  json
```

Response: An indication of success
204

### Get current user's favorites

- Endpoint path: /user/{id}/plants
- Endpoint method: GET
- Headers:

  - X-RapidAPI-Key: Your Key
  - X-RapidAPI-Host: house-plants2.p.rapidapi.com
  - Authorization: Bearer token

- Response: List of favorites
- Response shape:

  ```json
  {

        "favorites": [
          {
            "plant_id": int,
            "Common name": string,
            "Temperature max": object/number,
            "Watering": string,
            "Color of bloom": string,
            "Insects": List/string,
            "Climat": string,
            "Use": List/string,
        }
    ]
  }
  ```
