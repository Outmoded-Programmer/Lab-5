const express = require('express');
const { postUser } = require('../controllers/tableBookingController');
const router = express.Router();


router.post('/postReservation' , postUser)


module.exports = router