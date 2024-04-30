const express = require('express');
const { getHomepage, getABC, getHello } = require('../controllers/homeController');
const router = express.Router();


router.get('/', getHomepage);
router.get('/abc', getABC);
router.get('/hello', getHello);

module.exports = router;