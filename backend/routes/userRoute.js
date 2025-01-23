const express = require('express');
// const { authenticationToken, authorizeRole } = require('../middleWare/auth');
const { getUser, postUser } = require('../controllers/userController');
const { signupValidation, loginValidation } = require('../middleWare/userValidation');

const router = express.Router();


router.get("/getUser" , loginValidation , getUser );
router.post("/addUser" , signupValidation  , postUser );


module.exports = router