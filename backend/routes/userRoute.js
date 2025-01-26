const express = require('express');
// const { authenticationToken, authorizeRole } = require('../middleWare/auth');
const { signUp , login } = require('../controllers/userController.js');
const { signupValidation, loginValidation } = require('../middleWare/userValidation');

const router = express.Router();


router.post("/signup"  , signUp );
router.post("/login" ,  login );


module.exports = router