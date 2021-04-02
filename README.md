# SoloProject
full-stack basic CRUD app that allows for user to set up a to-do list and interact with Venmo API to reward after to-do list completion

# Set Up
- npm init : node package manager 
- npm install express react react-dom --> installing the dependencies and will add to the package.json.
- put devDependencies into package.json 
- Webpack set up for npm run build and npm run dev

# How do I create a basic CRUD (create, read, update, delete) app? 
- pre-plan: ER diagram + mental model of database, front end sketches, back end basic routes

- Set up basic authorization process using cookies to load up/redirect user to their appropriate page (and get their page's contents)
- SQL database set up locally and connect to elephantSQL for PostgreSQL online server
- BackEnd: Using NodeJS + Express, we can handle the various routes coming our way from the front/client end. 
  - through middlewares, we'd be able to modularize our application, making it easier to scale up.
    - User: create, read, update, delete
    - AdultWallet: create, read, update
    - Collection: create, read, update, delete
    - Task: create, read, update, delete
- FrontEnd: React to manipulate DOM, implement handling of database response (send get request, and receive get response), such as:
  - user name, 
  - loading up user's collections of to-do tasks (and its buttons: add, edit, delete), 
    - loading up each task's buttons (add, edit, delete), along with loading up each task's Reward Jar update button and User's adult_wallet's update button
