// define four functions
// createUser : handle POST request, send Insert query
  // if POST request is unsuccessful, return /signup page using res.render
// verifyUser: checks if username and password is correct
// getUser: handle GET request, send SELECT query
// deleteUser: handle DELETE request, send DROP query


// initialize cookieController as an empty object
const userController = {};

// createUser : handle POST request, send Insert query
  // if POST request is unsuccessful, return /signup page using res.render
userController.addUser = async (req, res, next) => {

  // write code here
  try {

    // implement parameterized query, no need for VALUES keyword when only using one parameter 
    const queryText = 'INSERT into "users" (username, password, first_name, last_name, zip_code)'
    'VALUES ($1, $2, $3, $4, $5);'


    // pull out username, password and all the required info and check if they're empty/unddefined
    const {username, password, first_name, last_name, zip_code} = req.body;
    const values = [username, password, first_name, last_name, zip_code];
    console.log('VALUES', values);
    // insert new user into the users table
    const { rows }  = await db.query(queryText, values);
    res.locals.addUser = rows[0];
    return next();
  }

  catch (err) {
    return next( {
      log: 'userController.addUser: ERROR: Invalid or unfound required data on res.locals.addUser object - Expected res.locals to be an object.',
      message: {err: 'userController.addUser: ERROR: Check server logs for details'}
    });
  }

};

// verifyUser: checks if username and password is correct


// getUser: handle GET request, send SELECT query


// deleteUser: handle DELETE request, send DROP query


// export cookieController as an object, allowing it to be used as a middleware
module.exports = userController;