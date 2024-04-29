const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.send('Hello Cong Anh !')
})

router.get('/abc', (req, res) => {
    res.send('Check ABC')
})

router.get('/hello', (req, res) => {
    res.render('sample.ejs')
})

module.exports = router;