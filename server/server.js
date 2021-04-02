const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
// error: module not found (fixed through installing as an npm dependency)
const cookieParser = require('cookie-parser');

// const userController = require('/controller/userController');
const cookieController = require('./controllers/cookieController');
// const sessionController = require('./controllers/sessionController');

// require in the various routers
const apiRouter = require('./routes/api');

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));

/**
* Set our Express view engine as ejs.
* This means whenever we call res.render, ejs will be used to compile the template.
* ejs templates are located in the client/ directory
*/
app.set('view engine', 'ejs');

// // Serve index.html on the route '/', going the React route
// app.get('/', (req, res) => {
//   return res.status(200).sendFile(path.join(__dirname, '../index.html'));
// });

/*
* root: at home page, need to setCookie, after which, serves the home page index.ejs to client side
*/
app.get('/', 
  cookieController.setCookie, 
  (req, res) => {
  // return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  res.render('./../client/index');
})

/*
* signup
*/

// signup page 
app.get('/signup',
  (req, res) => {
  res.render('./../client/signup', {error: null});
})

// when user attempts to sign up for a new account, 
  // we need to create a new user on the database
  // set a new SSIDCookie, and start a new Session

// app.post('/signup', userController.createUser, cookieController.setSSIDCookie, sessionController.startSession, (req, res) => {
//   // if the POST request was successful, redirect to the user's own page
//   // link up the name parameter to the username from the database
//   res.redirect('/:username');
// });

// various routes we're expecting from the front end
// when user gets redirected to their own page, after finish verifying log in
app.get('/:name', 
  // userController.getUser,
  (req, res) => { 
});

// 
// app.use('/api', apiRouter);
// app.use('/api', apiRouter);
// app.use('/api', apiRouter);
// app.use('/api', apiRouter);

app.listen(3000); // listens on the port 3000 -> http://localhost:3000/