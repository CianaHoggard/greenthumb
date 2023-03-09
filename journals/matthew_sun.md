02/09/2023:
    Today we start our repo and began journalling. We will be testing our local branches and pushing these journals onto the main branch
    in the repo. Our wireframe is mostly done and we plan to add our API endpoints. Endpoints will be drafted together on google docs before
    adding it into the project.

02/10/2023:
    We remodelled the front-end so that it is feasible with the functionality provided by the third party API. Instead of a search by plant name feature, we will now be retrieving categories of plants and allowing the user to navigate to a specific plant. We have also decided that almost all features of will require a bearer token, and that the unauthorized home page will be remarkably visual and informative about the features available by signing up in lieu of the lack of features.
    We have also changed some of our API end points to include the functionality provided by the third party API that we would need to code the changed features.


02/13/2023:
    Configured the three containers: db api and ghi. I tried to get authentication working however no success - I have run into the same error as demonstrated in the tutorial however the tutorial seems to think it's a good idea to skip over resolving that issue. I have also created an accounts table in the plants_db (migrations 001). I have deleted all router and query directories with the authentication code as current efforts are not showing any promise; will continue tomorrow with the rest of the team and staff support after pushing migration code tonight.


02/14/2023:
    As a group, we were able to hook everyone up to PG-Admin and fix our table for accounts to make it viable for our project. Then, we started and finished the authentication system including log in, log out, sign up, get protected, and get token (specific account info).
    Ciana, Christian, and myself will be recreating a new volume and migrating it, before testing out the authentication features on our own local development server.


02/15/2023:
    We worked as a group today to implement three new end points:
    1) to get all the plant categories
    2) to get all plants within each category
    3) to get plants by id (which we'll use to show plant details)
    The biggest challenge was figuring out how to write anti-corruption layers today as we had never done that in FastAPI before, added with the fact that the third party API is written with spelling errors/French terminology.


02/16/2023:
    Group work again today to implement the end points needed for a "my favorites" feature:
    1) Add plant to favorite
    2) Get my favorites
    3) Remove plant from favorite
    The hardest endpoint to implement was how to add a new plant to favorites because it was our first endpoint for this feature and we were still a little unfamiliar with modelIn modelOut objects, and where each object would be passed created or passed to. We also had to reimplement remove plant from favorite a few times because we weren't sure of how to refer to the row of interest especially from a front end point of view.

02/21/2023:
    We started the login front-end with using useToken and attempted to integrate the functions provided with our own app. So far, we have created a LoginPage.js form along with all the files needed for useToken. We were able to retrieve a response 200 upon typing in correct credentials and will continue working on what to do after.

02/22/2023:
    Finished jwt login and logout features on the front end. Navbar is incomplete but has all the necessary JSX written for it; will continue to do eventhandlers tomorrow. SignUp and LogIn button displays and works correctly when token is not detected, and a dropdown nav menu displays when token is valid.


02/23/2023:
    Broke off into groups today to work on frontend components. I did the categories page where I had to display a page of all the categories. Still working on throwing an error if access attemped without login, otherwise the structure of the component is mostly done. Awaiting "plants by category" page to be fully implemented before adding functional links in the cards.


02/24/2023:
    Finished redirect feature on categories as well as links to the "plants by categories" page. Removed commented out code and imports as well as console.logs/prints for my features.


02/27/2023:
    Added background graphics, and carousel into home page. Protected the plant details page so that redirection to login is enabled if not logged in. Plant-by-category cards updated and formatted - still needs work figuring out blurring background image only. Dynamic search bar by latin name added.


02/28/2023:
    We were able to render favorites to display correctly and adjust the ACLS for all plant objects because the owner of the third party API changed a few of his json responses. We were also able to implement the delete feature and instant re-rendering of the component.


03/01/2023:
    Delete feature was fixed after a CORS issue. The add-a-fav feature was implemented with a max 5 favorites per account due to third party API limitations. Button to add favorites is unavailable if favorite is already in favorites list or if max 5 favorites has been reached by user. Color scheme/styling was applied across navbar and most components. Cards were styled correctly.


03/02/2023:
    A lot of styling was done today across all pages. The details page was restyled the most e.g. putting elements in flexboxes and restructuring the details displayed. We are still in the process of selecting a good font that suits all the components. The favorite page was changed so that the delete button is now a little X buttons in the corner of each card, and instead of making the link wrap the entire card element, the card has an onclick that brings it to the detail page.


03/03/2023:
    Each person took one a different endpoint to write a unit test for. I chose "plant details" and in order to get the unit test working, I had to clean the router a bit so that it would expect an error message object instead of "internal server error" if there was an invalid input. Then, I create 3-4 assertion tests that each tested either shape or data.


03/06/2023:
    Created an about us component today which is accessible through the footer. About us component required the use of font awesome icons for LinkedIn and Gitlab links. The footer was made but styling is still an issue as well as having it load before the main component seems strange. Cards for the favorites and plant by categories page were fixed.


03/07/2023:
    Did a lot of work regarding foot and getting it to style correctly across all components. Currently, there is an issue regarding a huge spacing underneath component data which is being used to push the footer down to the bottom across all components. All components were adjusted to add a loader, where a setTimeout function is used to load each component's data fully before displaying JSX. Cards are also fixed.


03/08/2023:
    Added a lot of visuals to amost all the components from FreePik and remove.bg
    Afterwards, the features/landing page is created by taking screenshots of the components to "advertise" our features for potential new
    users. Everything is merged into main branch and should be ready for deployment.
