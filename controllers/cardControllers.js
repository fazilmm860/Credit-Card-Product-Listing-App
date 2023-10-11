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
const getSpecificCardController=async(req,res)=>{
    try{
        const {category}=req.params;

        //find cards with the same catergory name
        const cards=await AddCards.find({category:category})
        res.status(200).json(cards)
    }catch(error){
        res.status(404).json({message: error.message})
    }
}
const getCategoryCounts=async(req,res)=>{
    try{
const categoryCounts=await AddCards.aggregate([
{
    $group:{
        _id: '$category',
        count: { $sum: 1 }
    }
}
]
)
const countsMap = categoryCounts.reduce((acc, curr) => {
    acc[curr._id] = curr.count;
    return acc;
}, {});
res.status(200).json(countsMap);
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}

module.exports={addCardController,getCardsController,getSpecificCardController,getCategoryCounts} 