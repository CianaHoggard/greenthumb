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

- ## Headers:
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

### Show plant details

- Endpoint path: /plants
- Endpoint method: GET
- Query parameters:

  - «name»: «purpose»

- Headers:

  - X-RapidAPI-Key: d27ef6fa98mshc5eec8c73b54527p19751cjsn64e8f42ccc57
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

### Create my plants

- Endpoint path: /plants
- Endpoint method: POST
- Query parameters:

  - «name»: «purpose»

- Headers:

  - X-RapidAPI-Key: d27ef6fa98mshc5eec8c73b54527p19751cjsn64e8f42ccc57
  - X-RapidAPI-Host: house-plants2.p.rapidapi.com

- Response: Details of specific plant
- Response shape:

  ```json
  {

        "My plants": [
          {
            "Common name": string,

            "Blooming Season": string,
            "Color of bloom": string,
            "Climat": List/string,
            "Pruning": string,
        }
    ]
  }
  ```

### List my plants

- Endpoint path: /plants
- Endpoint method: GET
- Query parameters:

  - «name»: «purpose»

- Headers:

  - X-RapidAPI-Key: d27ef6fa98mshc5eec8c73b54527p19751cjsn64e8f42ccc57
  - X-RapidAPI-Host: house-plants2.p.rapidapi.com

- Response: List of plants
- Response shape:

  ```json
  {

        "My Plants": [
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
