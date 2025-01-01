const user=require('../models/users')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const { unsubscribe, use } = require('../routes/userRoutes')
// const { get } = require('mongoose')


exports.getUsers=async(req,res)=> {
    try {
        const users=await user.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

exports.deleteuser=async(req,res)=>{
    try {
        const id=req.params.id
        const userdeleted=await user.findByIdAndDelete({_id:id})
    res.status(200).json(userdeleted)

    } catch (error) {
    res.status(500).json({ message: error.message });
        
    }
}

exports.postuser=async(req,res)=>{
    try {
    //  const adduser=req.body
     const{username,email,password}=req.body
     
     const hasedpassword=await bcrypt.hash(password,10)
     const userwithhash={username:username,email:email,password:hasedpassword,password2:hasedpassword}
        const newuser=await user.create(userwithhash)
    //  const newuser=await user.create(adduser)  
     res.status(200).json(newuser)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

exports.userLogin=async(req,res)=>{
const {username,password}=req.body
try {
    const userLog=await user.findOne({username})
    if(!userLog){
        return res.status(400).json({message:'user not found'})
    }
    const isMatch=await bcrypt.compare(password,userLog.password)
    if(!isMatch){
        return res.status(400).json({message:'rong information'})
    }
    const token=jwt.sign({userId:userLog._id},'goback',{
        expiresIn:'1h'
    })
    res.status(200).json({message:'token found',token})
} catch (error) {
    res.status(500).json({error:error.message})
}
}

exports.verify=async(req,res,next)=>{
try {
    const token=req.header('Auth').replace('Baerer ','')
if(!token){
    res.status(401).json({message:'token not found'})
}
const Varfied=jwt.verify(token,'goback')
req.user=Varfied.userId
next()
}
catch (error) {
    res.status(401).json({error:error.message})
}
}

exports.home=async(req,res)=>{
const getuser=req.user
try {
    const checkuser=await user.findById(getuser)
    res.status(200).json({user:checkuser})
} catch (error) {
    res.status(500).json({error:error.message})
    
}
}

























// exports.userLogin=async(req,res)=>{
//     const {username,password}=req.body
//     try {
//         const userLog=await user.findOne({username})
//         if(!userLog){
//             return res.status(400).json({message:'user not found'})
//         }
//         const isMatch=await bcrypt.compare(password,userLog.password)
//         if(!isMatch){
//             return res.status(400).json({message:'Wrong information'})
//         }
//         const token=jwt.sign({userId:userLog._id},'goback',{
//         expiresIn:'1h'
//         })

//         res.status(200).json({message:'token found',token})
//     } catch (error) {
//         res.status(500).json({error:error.message})
//     }
// }

// exports.verify=async(req,res,next)=>{
//     try {
//         const token=req.header('Auth').replace('Baerer ','')
//         if(!token){
//             return res.status(401).json({message:'token not found'})
//         }
//         const Varfied=jwt.verify(token,'goback')
//         req.user=Varfied.userId
//         next()
//     } catch (error) {
//         res.status(401).json({error:error.message})
//     }
// }
// exports.home=async(req,res)=>{
//     const getUser=req.user
//     try {
//         const checkuser=await user.findById(getUser)
//         res.status(200).json({user:checkuser})
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// }












