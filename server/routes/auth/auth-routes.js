const express = require('express')
const {register, logout, login, authMiddleWare} = require('../../controllers/auth/auth-controller')
const router = express.Router();


router.post('/register',register);
router.post('/login',login);
router.post('/logout',logout);
router.get('/check-auth', authMiddleWare, (req,res)=>{
    const user = req.user;
    res.status(200).json({
        success: true,
        message : "Authenticated User",
        user
    })
});

module.exports = router;