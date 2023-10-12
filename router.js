const express = require('express');
const router = express.Router();

const userController = require('./controller/userController');

router.get('/', (req, res)=>{
    res.render('home-guest')
})

// router.get('/register', userController.register)

router.post('/register', userController.register)

module.exports = router;