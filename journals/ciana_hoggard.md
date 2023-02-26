Thursday February 9, 2023:

Today is the first day of documenting the progress of Project Gamma - "Green Thumb". So far, we've finished our wire-frame diagram. Our main objective is to finish the endpoints for the API design. The third-party API we are using is called House Plants.


Friday February 10, 2023:

Today, we remodeled the API design based on the third party API. Instead of using “GetAll”, we decided to “GetByCategory” and “GetAllCategories”. That way, users will be able to view all 21 categories of plants, select and get redirected to see the plants that belong to each category. We also updated our endpoints. Rest of the day, we reviewed FastAPI.


Monday February 13, 2023:

Today we presented the Excalidraw wireframe for the project. We received good feedback and were told to really consider the plant forum as a stretch goal. Afterwards we had a lecture demonstrating FastApi and then later we started on the project setup. Took a while to fix issues with the docker containers that would not run. After class, plan to review FastApi and authentication videos.


Tuesday February 14, 2023:

Today all group members were able to get all of the containers to run in Docker. My ghi container would exit out on its own so I had to rebuild my containers, images and volumes. We created the "pg-admin" and "plants" volumes. I had to delete the "node_modules" folder and then used the command for mac to rebuild my images and containers. Afterwards, my all containers worked. By the end of the day, we were able to create the instance of the authenticator using JWTdown for FastAPI.


Wednesday February 15, 2023:

Today we made a lot of progress. We were able to get information from the House Plants API. More specifically, we finished three more endpoints. The first endpoint was to get all categories, the second endpoint was to get all plants for a specific category and the last endpoint was to get plant details.


Thursday February 16, 2023:

Today we finished our endpoints. Christian was the driver today for our code. We were able to create favorites, get all favorites and delete favorites for authenticated users. We added another migrations file for our favorites table and added a favorites.py file to queries and routers

Tuesday February 21, 2023:

Today we began our front-end for the application. I added functional login and sign up buttons to the nav bar. We also created the LoginPage.js and Token.js files. As for authorization, we plan to fix tomorrow.

Wednesday February 22, 2023:

Finished login, logout and sign up features for the front end with proper authorization.

Friday February 24, 2023:

Today we were able to display plant categories and specific plants for each category. I began to work on the plant details page as well. We added functional links between the categories overview page to each individual category and to each plant.

Saturday February 25, 2023:

Today I was able to add css to the plant details page so that the page may be more organized. I added an "Add to my plants" button which would link to the "My Plants" page. The goal for next week is to complete the favorites page and to make the "Add button fully functional.
