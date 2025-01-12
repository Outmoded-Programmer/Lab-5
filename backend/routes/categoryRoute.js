const express = require('express');
const router = express.Router() ;
const categoryController = require('../controllers/categoryController.js');

router.post('/addCategory' , categoryController.addCategory)
router.get('/getCategory' , categoryController.getCategory)
router.put('/putCategory/:id' , categoryController.updateCategory)
router.delete('/deleteCategory/:id' , categoryController.deleteCategory)

module.exports = router ;