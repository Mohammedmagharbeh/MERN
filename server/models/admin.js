const mongoose=require('mongoose')

const adminSchema=new mongoose.Schema({
adminname:{type:String,require:true},
adminemail:{type:String,require:true},
adminpassword:{type:String,require:true},
adminpassword2:{type:String,require:true}
})
const admin=mongoose.model('admins',adminSchema)
module.exports=admin;