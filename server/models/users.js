const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    username:{type:String,require:true},
    phone:{type:Number,require:true},
})
const User=mongoose.model('users',userSchema)
module.exports=User;