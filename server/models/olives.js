const mongoose=require('mongoose')
const oliveSchema=new mongoose.Schema({
    image:{type:String,require:true}
})
const olive=mongoose.model('olive',oliveSchema)
module.exports=olive;