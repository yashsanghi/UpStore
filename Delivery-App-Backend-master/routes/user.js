var express = require('express');
var router = express.Router();

const { updateUser, getUserById, notify } = require('../controllers/user');
const { isSignedIn, isAuthenticated } = require('../controllers/auth');

router.param('userId', getUserById);

router.put('/user/:userId', isSignedIn, isAuthenticated, updateUser);
router.post('/notify', notify);

module.exports = router;
