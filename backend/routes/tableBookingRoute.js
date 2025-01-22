const express = require('express');
const { postReservation, getReservation } = require('../controllers/tableBookingController.js');
const router = express.Router();


router.post('/postReservation' , postReservation)
router.post('/getReservation' , getReservation)


module.exports = router