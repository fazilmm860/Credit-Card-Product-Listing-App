const mongoose=require('mongoose');

const addCardSchema=mongoose.Schema({

    bank:{
        type:String,
        required:true
    },
    cardName:{
       type:String,
       required:true
    },
    category:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    }
    

},
{timeSamp:true}
);

const Addcards=mongoose.model("Addcards",addCardSchema)

module.exports=Addcards;