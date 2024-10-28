const product=require('../models/products')

// Get methode

exports.getproducts=async(req,res)=>{
    try{
    const Products=await product.find()
    res.status(200).json(Products) 
}
catch(error){
    res.status(500).json({error:error.message})
}     
}


// Post methode

exports.getcategory=async(req,res)=>{
    try{
        const cat=req.body.cat;
        const Products=await product.find({category:cat})
        console.log(Products)
        res.status(200).json(Products) 
    }
    catch(error){
        res.status(500).json({error:error.message})
    }     
    } 

// put methode(update)

    exports.UpdateProducts=async(req,res)=>{

        try{ 
    const id=req.params.id;
    const body = req.body;
    const UpdateProduct=await product.findByIdAndUpdate(id,body,{new:true})
    res.status(200).json(UpdateProduct)
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    }














// exports.newgetpro=async(req,res)=>{
//     try{
//         const id=req.params.id;
//         const newgetpro=await product.findOne({id:id})
//         res.status(200).json(newgetpro)
//             }
//             catch(error){
//                 res.status(500).json({error:error.message});
//             }
//         }
