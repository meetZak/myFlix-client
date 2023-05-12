myFlix-Client
Objective
Using React, build the client-side for an app called myFlix based on its existing server-side code (REST API and database).

Demo
The deployed app can be viewed here.

Description
Key Features
Main View

Returns ALL movies to the user (each movie item with an image, title, and description)
Filtering the list of movies with a “search” feature
Ability to select a movie for more details
Ability to log out
Ability to navigate to Profile view
Single Movie View

Returns data (description, genre, director, image) about a single movie to the user
Allows users to add a movie to their list of favorites
Login View

Allows users to log in with a username and password
Signup View

Allows new users to register (username, password, email, date of birth)
Profile View

Displays user registration details
Allows users to update their info (username, password, email, date of birth)
Displays favorite movies
Allows users to remove a movie from their list of favorites
Allows existing users to deregister
Getting Started
🚀 Tech Stack
React
JSX
Bootstrap
Parcel as the build tool
Development Environment
npm install -g parcel
npm install -save react react-dom
create a src folder in project directory with three files: index.jsx, index.scss, index.html
run parcel src/index.html in terminal to begin parcel build
Dependencies
see package.json file
