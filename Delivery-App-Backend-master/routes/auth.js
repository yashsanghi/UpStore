var express = require('express');
var router = express.Router();

const { check } = require('express-validator');
const { signout, getSessionId, verifyOTP } = require('../controllers/auth');

router.post('/getSessionId', [check('number', 'Please enter a valid number').isLength({ min: 10 })], getSessionId);

router.post('/verifyOTP', verifyOTP);

router.get('/signout', signout);

module.exports = router;
