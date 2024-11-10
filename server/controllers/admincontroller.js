const admin=require('../models/admin')

exports.getadmin=async(req,res)=>{
try {
    const admins=await admin.find()
    res.status(200).json(admins)
} catch (error) {
    res.status(400).json({message:error.message})
}
}

exports.postadmin=async(req,res)=>{
try {
    const addadmin=req.body
    const newadmin=await admin.create(addadmin)
    res.status(200).json(newadmin)
    
} catch (error) {
    res.status(400).json({message:error.message})   
}
}