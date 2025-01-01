const olive=require('../models/olives')

exports.getolive=async(req,res)=>{
   try {
    const fetcholive=await olive.find()
    res.status(200).json(fetcholive)
   } catch (error) {
res.status(500).json({message:error.message})    
   } 
}
 exports.postolive=async(req,res)=>{
    try {
        const newolive=req.body;
        const olivee=await olive.create(newolive)
        res.status(200).json(olivee)
    } catch (error) {
res.status(500).json({message:error.message})    
    }
 }