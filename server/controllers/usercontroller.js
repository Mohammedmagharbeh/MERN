const user=require('../models/users')


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
     const newuser=await user.create(adduser)  
     res.status(200).json(newuser)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}