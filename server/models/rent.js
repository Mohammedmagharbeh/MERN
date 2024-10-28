    const mongoose=require('mongoose');

    const rentsSchema= new mongoose.Schema({

        name:{type:String,require:true},
        year:{type:Number,require:true},
        image:{type:String,require:true},
        price:{type:Number,require:true}
    })
    const rent=mongoose.model('rent',rentsSchema)
    module.exports=rent;