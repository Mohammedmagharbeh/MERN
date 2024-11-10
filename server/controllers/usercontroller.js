const user=require('../models/users')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')


exports.getUsers=async(req,res)=> {
    try {
        const users=await user.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

exports.postuser=async(req,res)=>{
    try {
     const adduser=req.body
    //  const{username,email,password}=req.body
     
    //  const hasedpassword=await bcrypt.hash(password,10)
    //  const userwithhash={username:username,email:email,password:hasedpassword,password2:hasedpassword}
    //     const newuser=await user.create(userwithhash)
     const newuser=await user.create(adduser)  
     res.status(200).json(newuser)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}