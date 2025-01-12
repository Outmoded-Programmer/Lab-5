const express =  require('express');
const router = express.Router();
const FoodController = require('../controllers/foodController.js');


router.post('/addFood' , FoodController.addFood);
router.get('/getFood' , FoodController.getFood);
router.put('/putFood/:id' , FoodController.updateFood);
router.delete('/deleteFood/:id' , FoodController.deletedFood);

module.exports = router ;