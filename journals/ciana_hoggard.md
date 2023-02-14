Thursday February 9, 2023:

Today is the first day of documenting the progress of Project Gamma - "Green Thumb". So far, we've finished our wire-frame diagram. Our main objective is to finish the endpoints for the API design. The third-party API we are using is called House Plants.


Friday February 10, 2023:

Today, we remodeled the API design based on the third party API. Instead of using “GetAll”, we decided to “GetByCategory” and “GetAllCategories”. That way, users will be able to view all 21 categories of plants, select and get redirected to see the plants that belong to each category. We also updated our endpoints. Rest of the day, we reviewed FastAPI.


Monday February 11, 2023:

Today we presented the Excalidraw wireframe for the project. We received good feedback and were told to really consider the plant forum as a stretch goal. Afterwards we had a lecture demonstrating FastApi and then later we started on the project setup. Took a while to fix issues with the docker containers that would not run. After class, plan to review FastApi and authentication videos.


Tuesday February 12, 2023:

Today all group members were able to get all of the containers to run in Docker. My ghi container would exit out on its own so I had to rebuild my containers, images and volumes. We created the "pg-admin" and "plants" volumes. I had to delete the "node_modules" folder and then used the command for mac to rebuild my images and containers. Afterwards, my all containers worked. By the end of the day, we were able to create the instance of the authenticator using JWTdown for FastAPI.
