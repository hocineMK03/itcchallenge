
const express = require('express');
const router = express.Router();
const authcontrollers=require('../controllers/authControllers');
const jwtVerify=require('../middleware/jwtVerify')
router.post('/login',authcontrollers.handleLoginRequest)
router.post('/register',authcontrollers.handleRegisterRequest)
// router.post('/logout',authcontrollers.handleLogout)
router.get('/perms',jwtVerify,authcontrollers.handleGetPermissions)
module.exports = router;