const express=require('express');
const {addCardController,getCardsController}=require('../controllers/cardControllers')

const router=express.Router();

//routes
//Method-get
router.get('/getcards',getCardsController)

//Method-post
router.post('/addcards',addCardController);

module.exports=router;