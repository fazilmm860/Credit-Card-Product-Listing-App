const express=require('express');
const {addCardController,getCardsController, getSpecificCardController, getCategoryCounts}=require('../controllers/cardControllers')

const router=express.Router();

//routes
//Method-get
router.get('/getcards',getCardsController)

//Method-get-specfic-category
router.get('/getspecific/:category',getSpecificCardController);

//method-get-count-category
router.get('/categorycounts', getCategoryCounts);

//Method-post
router.post('/addcards',addCardController);

module.exports=router;