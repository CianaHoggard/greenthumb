Christian Rodriguez Journal

Feb 9, 2023:

Today, we have completed filling in the details in the wireframe and have started setting up our API endpoints. Our primary focus is on the API endpoints file, as we are using the 3rd Party House Plants API, which mainly involves filtering GET requests. We have also added a POST request for user sign-ups. Additionally, we have established our infrastructure and are in the process of transferring everything over.

Feb 10, 2023:
Today we updated our wireframe and API endpoints page and gained a greater understanding of our project. We originally wanted to add a search feature that went through the third-party API's get-all plants list, but the API was designed for categories instead so we had to adjust both wireframe and API endpoints. We clarified some terms in the endpoints to match what we wanted. For example, our my plant's page became favorite plants to match the ubiquitous language/function of a favorite. We made a new category page, that shows plants within the category, and the final endpoint being the details of the plant from a category.

Feb 13, 2023:
Today we set up our docker.yaml file and struggled immensely to get all containers running. We have issues with pc users needing to change their select end-of-line sequence to LF. We also had issues with the API container waiting and timing out so we couldn’t migrate. We got the db container up and running pretty much instantly so it was just the GHI and api containers we struggled with. We did end up managing to fix all our containers by commenting out the wait request until we migrated a table, and changing the end-of-line spacing to get our ghi container up and running. Once we verified that all containers ran we called it a night and watched the authentication exploration.

Feb 14, 2023:
Today we spent the time making sure after the pull request that everyone's container was running. There were some issues but we managed through them. From there we spent the majority of the time rebuilding our tables/migrations to what we wanted and setting up the queries and routers for the login/logout. We ran into some issues with the create functions with a particular index error causing our function to blow up. We went through the majority of the video so far.
