const express = require('express');
const router = express.Router();

const { testPageHandler, resultPageHandler } = require('../handlers');

// Test page endpoint
router.get('/test', testPageHandler);

// Save page endpoint
router.post('/result', saveResultHandler);

// Result page endpoint
router.get('/result', resultPageHandler);


module.exports = router;
