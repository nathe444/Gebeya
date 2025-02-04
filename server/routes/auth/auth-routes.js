const express = require('express')
const {register} = require('../../controllers/auth/auth-controller')
const {login} = require('../../controllers/auth/auth-controller')


const router = express.Router();


router.post('/register',register);
router.post('/login',login);

module.exports = router;