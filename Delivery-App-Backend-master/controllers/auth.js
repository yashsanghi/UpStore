const User = require('../models/user');
// const { check, validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
const https = require('https');

exports.getSessionId = (req, res, next) => {
  let phoneNumber = req.body.phoneNumber;
  console.log(req.body.phoneNumber);
  /***************************************/
  https
    .get(`https://2factor.in/API/V1/${process.env.OTPAPIKEY}/SMS/+91${phoneNumber}/AUTOGEN`, resp => {
      let data = '';

      // A chunk of data has been recieved.
      resp.on('data', chunk => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        console.log(data);
        console.log(JSON.parse(data));
        const session_id = JSON.parse(data).Details;
        return res.status(200).send({
          session_id,
          phoneNumber
        });
      });
    })
    .on('error', err => {
      console.log('Error: ' + err.message);
    });
  /******************************* */
};

exports.verifyOTP = (req, res, next) => {
  const session_id = req.body.session_id;
  const OTP = req.body.OTP;

  const phoneNumber = req.body.phoneNumber;

  /************************************** */
  https
    .get(`https://2factor.in/API/V1/${process.env.OTPAPIKEY}/SMS/VERIFY/${session_id}/${OTP}`, resp => {
      let data = '';

      // A chunk of data has been recieved.
      resp.on('data', chunk => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        console.log(JSON.parse(data));

        const { Details } = JSON.parse(data);

        if (Details === 'OTP Matched') {
          User.findOne({ phoneNumber }, (err, user) => {
            if (err) {
              // Set proper status code later
              return res.status(422).json('Error Ocurrer in finding user');
            }

            if (user) {
              // create token
              const token = jwt.sign({ _id: user._id }, process.env.SECRET);

              //put token in cookie
              res.cookie('token', token, { expire: new Date() + 9999 });

              // send response to front end
              const { _id, name, phoneNumber, pushToken } = user;
              return res.json({ token, user: { _id, name, phoneNumber, pushToken } });
            }
          });
        } else if (Details === 'OTP Mismatch') {
          return res.json({ error: 'Incorrect OTP entered' });
        } else {
          res.send(`Error Occurred. Details:${Details}`);
        }
      });
    })
    .on('error', err => {
      console.log('Error: ' + err.message);
    });
  /******************************* */
};

exports.signout = (req, res) => {
  res.clearCookie('token');
  console.log('signed out');
  res.json({
    message: 'User signout successfully'
  });
};

//protected routes
exports.isSignedIn = expressJwt({
  secret: process.env.SECRET,
  userProperty: 'auth',
  algorithms: ['HS256']
});

// custom middlewares
exports.isAuthenticated = (req, res, next) => {
  let checker = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!checker) {
    return res.status(403).json({
      error: 'ACCESS DENIED'
    });
  }
  next();
};
