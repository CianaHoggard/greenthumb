Christian Rodriguez Journal

Feb 9, 2023:

Today, we have completed filling in the details in the wireframe and have started setting up our API endpoints. Our primary focus is on the API endpoints file, as we are using the 3rd Party House Plants API, which mainly involves filtering GET requests. We have also added a POST request for user sign-ups. Additionally, we have established our infrastructure and are in the process of transferring everything over.

Feb 10, 2023:
Today we updated our wireframe and API endpoints page and gained a greater understanding of our project. We originally wanted to add a search feature that went through the third-party API's get-all plants list, but the API was designed for categories instead so we had to adjust both wireframe and API endpoints. We clarified some terms in the endpoints to match what we wanted. For example, our my plant's page became favorite plants to match the ubiquitous language/function of a favorite. We made a new category page, that shows plants within the category, and the final endpoint being the details of the plant from a category.

Feb 13, 2023:
Today we set up our docker.yaml file and struggled immensely to get all containers running. We have issues with pc users needing to change their select end-of-line sequence to LF. We also had issues with the API container waiting and timing out so we couldn’t migrate. We got the db container up and running pretty much instantly so it was just the GHI and api containers we struggled with. We did end up managing to fix all our containers by commenting out the wait request until we migrated a table, and changing the end-of-line spacing to get our ghi container up and running. Once we verified that all containers ran we called it a night and watched the authentication exploration.

Feb 14, 2023:
Today we spent the time making sure after the pull request that everyone's container was running. There were some issues but we managed through them. From there we spent the majority of the time rebuilding our tables/migrations to what we wanted and setting up the queries and routers for the login/logout. We ran into some issues with the create functions with a particular index error causing our function to blow up. We went through the majority of the video so far.We eventually finished all the endpoints!!! After the post request everything went smoothly.

Feb 15, 2023:
Today we spent the majority of time dealing with our 3rd party API routes and queries. We did a get category, get plants within a category, and get a plant detail. We kinda got stuck in defining what the shape of our information was coming in as. Once we defined that some values were dictionaries and lists, we could finally get the information we wanted using the List and Union to get that information. We’ll see if we finish our final endpoints tonight but we’re making great progress today with sier or the instructor's help.

Feb 16, 2023:
Today we finished up our endpoints. We primarily dealt with the feature of favoriting a plant, getting all of a user's favorites, and deleting a user's favorite. For each endpoint, we authenticated them using the authentication we built two days ago. It primarily consisted of inputting account_data as a parameter and having an if or else statement. We had the most trouble writing the table in SQL and entering the table to see how the data was formatted(int, str). We also had some confusion with our data type being int or strings, but we resolved it pretty quickly. As of right now, we got everything and if we need to change anything I think we’ll be good.

Feb 21, 2023
Today we started frontend and struggled a little bit to incorporate bootstrap into our project, but once we figured that out we started working on our routes, main page, and the nav bar. Our main page was simple enough once we added our login buttons, logo, and title. From there we started the nav bar where some issues arose, but we handled them accordingly. From there we started frontend authentication and this is where we struggled a lot to understand the Learn. The instructions were unclear and we needed two Siers to even make sense of what was expected. From there we ended up struggling till the end of the day. Today was probably the first day where we couldn’t finish what we set out to do, but we’re getting closer.

Feb 22, 2023
Today we mainly worked on login with an attempt at fixing it and the logout. So far it does login a user, but the logout is acting weird by signing in a user anyway when they refresh the page. Authentication has been a big headache and I feel as if it isn't going to be the last of the headaches we’re going to face going forward. We did some work on the navbar to fix some bugs but most of the time was spent fighting with authentication to get it to work.

Feb 23, 2023:
Today we started by fixing some of the code in our backend and cleaning up both our routers and queries. This was a byproduct of us trying to figure out authentication in the front, but being unable to because of some routes not being authenticated. After we managed to fix that we then began to format our frontend code to fetch the categories from the api. We have authentication mostly figured out with some sier help, but it remains to be seen if it actually works.

Feb 24, 2023
I figured out the biggest problem with my endpoint and authentication was because the token was getting lost when I tried to reach my endpoint. Once I realized this I fixed it in my useEffect function where the token is now a parameter for when the page gets rendered and it keeps track of the token as it switches between categories. This was my biggest blocker so far in the frontend and it dealt mostly with the authentication and our routes not allowing the 3rd party api to load the pictures. We also connected the plant categories and my get plants by categories and finished a big part of our project.

Feb 27, 2023
Today we spent most of the day error handling and styling the page to what we wanted it to look like. Our api was changed this morning so the shape of the data changed with it. We spent the morning dealing with that in our backend and front end. It was a simple fix so after that we started the first stages of styling the page. The hardest thing to work on was the images from our api being less than stellar. Length, width, and resolution were a little rough to work with and we probably won’t finish today. The project is coming along really nice and today was minimal stressful.

Feb 28, 2023
Today we spent all the time working on the get favorites and delete favorites for today. The hardest part was easily getting the get favorites to work with our api. Our experience with Project Carcar was not that helpful in working out this monstrosity of an endpoint/react component. We also worked on the delete function to delete a favorite from our favorites page. We did some error handling and styled some issues with our 3rpd party api and spacing on the browser. For the most part, we finished two endpoints and the styling is coming along really nicely for our website. We also had to limit the number of favorites for a user because out API only allows 5 requests per second.

03/01/2023:
Today we finished all the endpoints that we made in the wireframe and started finalizing our styles. We first knocked out the post for the favorites by working through a 422 error and changing our routers to take in a user_id. From there we fixed a cors issue that involved two of our fields not allowing null/none and fixed that in the backend by adding a pipe. For the final endpoint, we added our quick care table to our main page and homepage. That was done in a matter of minutes and just needed some styling done. For the most part
