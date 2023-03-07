# Green Thumb

- Matthew Sun
- Megan Rodriguez
- Ciana Hoggard
- Christian Rodriguez

Green Thumb - Houseplant care website

## Design

- [API design](api-design.md)
- [Data model](docs/data-model.md)
- [GHI](docs/green_thumb_wireframe_final.md)
- [Integrations](docs/integrations.md)

## Intended market

We are targeting general consumers who are looking for quick plant care based on watering needs, pruning, light exposure, and various other factors to take care of their favorite plants.

## Functionality

- Before a user may access a the features they must first sign up for a account
- Visitors will be shown a feature page that displays all the features of the site
- This includes
  - The Home page that cycles through the creators favorite plants of the week.
  - A quick care table that is accessible from the home page and favorite page.
  - A category page that lists all the various plant categories
  - A get plants by category page that shows all the plants in a given category
  - A plant detail page that shows all the details of a plant that a user would need
- Users can click on a plant to favorite them, and view their favorites on the favorites page.
- On the favorites page a user can delete a plant from their favorites
  - The quick care table will update on both the favorites and homepage.
  - The footer leads to the about page where information about
    - The creators
    - Their socials
    - Summary of the project and all the languages and tools used.

## Project Initialization

To use the application the way it was intended make sure to follow the steps below.

- Note this project uses Docker

1. Sign up for an account on https://rapidapi.com/hub
2. From there access the House Plants API from the link https://rapidapi.com/mnai01/api/house-plants2
3. Clone the repository down to your local machine
4. Get your API Key from the API page and paste it within the api/keys.py file
5. CD into the new project directory
6. run `docker volume create plants`
7. run `docker volume create pg-admin`
8. Run `docker compose build`
9. Run `docker compose up`

To do migrations: bash into into module3-project-gamma-db-1 then migrate

1. run `docker exec -it module3-project-gamma-api-1 bash`
2. run `python -m migrations up`

To see database, in a separate terminal tab

1. run `docker exec -it module3-project-gamma-db-1 bash`
2. run `psql -h localhost -U plants_user plants_db`
3. run `\d accounts`
