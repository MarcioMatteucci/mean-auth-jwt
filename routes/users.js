const express = require('express');
const router = express.Router();

// Register
router.get('/register', (req, res) => {
   res.send('REGISTER');
});

// Authenticate
router.get('/authenticate', (req, res) => {
   res.send('AUTHENTICATE');
});

// Profile
router.get('/profile', (req, res) => {
   res.send('PROFILE');
});

// Profile
router.get('/validate', (req, res) => {
   res.send('VADILATE');
});

module.exports = router;