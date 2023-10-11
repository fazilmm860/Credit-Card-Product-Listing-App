const AddCards=require('../models/addCardModel');

//get-cards
const getCardsController= async (req,res)=>{
    try{
        const cards=await AddCards.find()
        res.status(200).json(cards)
    }catch(error){
        res.status(404).json({message:error.message})
    }
};

//add-cards
const addCardController= async(req,res)=>{
    try{
const newCard= new AddCards({
    bank:req.body.bank,
    cardName:req.body.cardName,
    category:req.body.category,
    image:req.body.image,
    description:req.body.description

})
        await newCard.save();
        res.status(200).json(newCard)
    }catch(error){
        res.status(404).json({message:error.message})
    }
}

module.exports={addCardController,getCardsController}