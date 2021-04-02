// initialize cookieController as an empty object
const cookieController = {};


/**
* setCookie - set a cookie with a random number
*/
cookieController.setCookie = (req, res, next) => {
  // write code here
  res.cookie('codesmith', 'isAwesome');
  res.cookie('secret', Math.floor(Math.random() * 100));

  next(); 
}

cookieController.setSSIDCookie = (req, res, next) => {
  // console.log('cookieSetter function invoked');

  // User.findOne(req.body, (err, user) => {
  //   // if a database error occurs, call next with the error message passed in
  //   // for the express global error handler to catch
  //   if (err) return next('Error in cookieController.setSSIDCookie: ' + JSON.stringify(err));
  //   console.log(user);
  //   // res.locals.users = users;
  
  //   res.cookie('ssid', res.locals.id, {
  //     httpOnly: true
  //   });
  //   return next();
  // });
}


// export cookieController as an object, allowing it to be used as a middleware
module.exports = cookieController;