
const mongoose=require('mongoose')
const carSchema=new mongoose.Schema({

    // name:{type:String,require:true,unique:true},
    name:{type:String,require:true},
    year:{type:Number,require:true},
    color:{type:String,require:true}
})
const car=mongoose.model('cars',carSchema)
module.exports=car;