const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    name:{type:String,require:true},
    price:{type:Number,require:true},
})
const product=mongoose.model('products',productSchema)
module.exports=product;