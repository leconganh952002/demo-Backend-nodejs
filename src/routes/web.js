const express = require('express');
const { getHomepage, getABC, getHello, postCreateUser, getCreatePage } = require('../controllers/homeController');
const router = express.Router();


router.get('/', getHomepage);
router.get('/abc', getABC);
router.get('/hello', getHello);
router.get('/create', getCreatePage);

router.post('/create-user', postCreateUser);

module.exports = router; 