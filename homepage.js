const express = require('express');
const router = express.Router();

const { homeHandler, personalityHandler, accountHandler} = require('../handlers');

// Home endpoint
router.post('/home', homeHandler);

// Personality endpoint
router.post('/personality', personalityHandler);

// Account endpoint
router.post('/account', accountHandler);

module.exports = router;
