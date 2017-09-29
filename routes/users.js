const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');

// Register
router.post('/register', (req, res, next) => {
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
   res.send('AUTHENTICATE');
});

// Profile
router.get('/profile', (req, res, next) => {
   res.send('PROFILE');
});

module.exports = router;