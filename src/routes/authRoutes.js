const express = require('express');
const passport = require('passport');
const authApi = require('../api/authApi');

const router = express.Router();


router.post('/login', passport.authenticate('local', { session: false }), authApi.login);
router.post('/signup', authApi.signup);
router.post('/logout', authApi.logout);
router.post('/refresh-token', authApi.refreshToken);


module.exports = router;
