## Rotten Potatos

## Components v Pages
Even though both are going be constructed as `components`. I want to have a clear split (in terms of mental picture) between what we call a component and a page in this application

### Pages & Routes

/                 HomePage       Page
/login            LoginPage      Page
/signup           SignupPage     Page
/profile          ProfilePage    Page
/movies           MoviesPage     Page
/movies?          SearchMovies   Page
/movies/add       Add Movies     Page
/movies/:id/edit  Edit Movies    Page
/movies/:id       SingleMovies   Page
/:username        SingleUserProfile Page
NOT FOUND


### Data necessary for each page 

ALL OVER -> if logged in -> `DELETE` request for logout

/ -> user info (to check if you're logged in or not) // user from DB
/login -> to be able to send POST request
/signup -> to be able to send POST request
/profile -> user info and be able to send `PUT`/`PATCH`, `DELETE`, or `POST` 
/movies -> a list of movies
/movies? -> list of movies filtered
/movies/add -> `POST` request to create movie
/movies/:id/edit -> `PUT` request to update a single movie
/movies/:id -> `GET` request to get single movie. `POST` request to create review. `PUT` request to edit a review
/:username   -> `GET` request to get single user info

### Protected routes?

/ -> Doesnt have to be auth
/login -> Doesnt have to be auth
/signup -> Doesnt have to be auth
/profile -> Has to be auth
/movies & /movies? -> 
   -  To see list: No auth

/movies/:id ->
   -  To see reviews: No auth
   -  To edit review: Auth and have to be owner of the review
   -  To add review: Auth needed
   -  To delete review: Auth and have to be owner of the review
/movies/:id/edit -> MAYBE: Add an admin user, and to edit you have to be admin
/movies/add -> Need to be Auth. MAYBE later: add an admin user to add

/:username -> Dont have to be auth
