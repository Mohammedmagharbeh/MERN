// this is get methode

const car=require('../models/cars')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')


exports.getcar=async(req,res)=>{

    try {
        const cars=await car.find()
        res.status(200).json(cars)
    } catch (error) {
        res.status(500).json({error:error.message})
    }}

// this is post methode

exports.postCar=async (req,res) => {
    const {name,year,color}=req.body
try {
    // const carAdd=req.body
    // const cars=await car.create(carAdd)
    // res.status(200).json(cars)
    const hashedcolor=await bcrypt.hash(color,10)
    const newcars={name:name,year:year,color:hashedcolor}
    const dbcar=await car.create(newcars)
    res.status(200).json({ message: `car was done ${(newcars)}` });
} catch (error) {
    res.status(500).json({error:error.message})
}}

// this is put methode:
// this is update Methdoe;
exports.updatecar=async(req,res)=>{
    try {
        const body=req.body;
        const id=req.params.id
const updatecars=await car.findByIdAndUpdate(id,body,{new:true})
res.status(200).json(updatecars)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}


// Delete car

    exports.deletecar=async(req,res)=>{
    try{
    const id=req.params.id
    const deletecars=await car.findByIdAndDelete({_id:id})
    res.status(200).json(deletecars)
    }
    catch{
        res.status(500).json({error:error.message})
    }
    }


// exports.deletecar = async (req, res) => {
//     try {
//         const id = req.params.id; 
//         const field = req.params.field;  
//         const deletecars = await car.updateOne(
//             { _id: id },  
//             { $unset: { [field]: "" } } 
//         );
//  
//         res.status(200).json(deletecars)
//         }
//     catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };


exports.carLogin = async (req, res) => {
    const {name,year,color}= req.body;

    try {
        const carlog = await car.findOne({name});
        if (!carlog) {
            return res.status(400).json({ message: 'Car not found' });
        }
        const isMatch = await bcrypt.compare(color, carlog.color);
        if (!isMatch) {
            return res.status(400).json({ message:'Wrong information' });
        }
        const token=jwt.sign({ carId:carlog._id },'goback', {
            expiresIn: '1h'
        });
        res.status(200).json({ message: 'Car found' ,token:token});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.verify=async(req,res,next)=>{
    try {
        const token=req.header('Auth').replace('Baerer ','')
        console.log(token)
        if(!token){
            res.status(401).json({message:'no token'})
        }
        const Varfied=jwt.verify(token,'goback')
        console.log(Varfied)
        req.car=Varfied.carId;
        console.log(req.car)
        next();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
exports.home=async(req,res)=>{
    console.log(req.car)
    const getCar = req.car
    try {
     checkcar=await car.findById(getCar)
     res.status(200).json({message:'welcome to home page',car:checkcar.name})   
    } catch (error) {
        res.status(500).json({ error: error.message });
        
    }
}