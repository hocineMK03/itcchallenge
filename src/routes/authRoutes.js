
const express = require('express');
const router = express.Router();
const authcontrollers=require('../controllers/authControllers');

router.post('/login',authcontrollers.handleLoginRequest)
router.post('/register',authcontrollers.handleRegisterRequest)
// router.post('/logout',authcontrollers.handleLogout)

module.exports = router;