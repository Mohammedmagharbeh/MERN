const rents=require('../models/rent')

// get for test
exports.getRent = async (req,res) => {
    try {
        const Rent = await rents.find();
        res.status(200).json(Rent);
    } catch (error){
        res.status(500).json({ message: error.message });
    }
};

// post
exports.postRent=async(req,res)=>{
    try{
const addRent=req.body;
const rentpost=await rents.create(addRent)
res.status(200).json(rentpost)
    }
    catch (error){
        res.status(500).json({ message: error.message });
    }
}

// delete
exports.deleteRent=async(req,res)=>{
try {
    const id=req.params.id;
    const rentdelete=await rents.findByIdAndDelete({_id:id})
    res.status(200).json(rentdelete)
    console.log(rentdelete)
} catch (error) {
    res.status(500).json({ message: error.message });
}}

exports.updatenewRent=async (req,res) => {
    try {
        const id=req.params.id
        const body=req.body;
        const rentupdate=await rents.findByIdAndUpdate(id,body,{new:true})
        res.status(200).json(rentupdate)
    } catch (error) {
    res.status(500).json({ message: error.message });
        
    }
}