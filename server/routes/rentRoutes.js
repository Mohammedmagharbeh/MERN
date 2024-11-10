const express=require('express') 
const cors=require('cors');
const routes=express.Router();
require('dotenv').config();


const{getRent,postRent,deleteRent,updatenewRent}=require('../controllers/rentcontroller')
routes.get('/Rent',getRent)
routes.post('/Postrent',postRent)
routes.delete('/deleterent/:id',deleteRent)
routes.put('/updatenewrent/:id',updatenewRent)
module.exports=routes;

