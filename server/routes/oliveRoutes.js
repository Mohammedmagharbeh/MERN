const express=require('express') 
const cors=require('cors');
const routes=express.Router();
require('dotenv').config();

const {getolive,postolive}=require('../controllers/olivecotroller')
routes.get('/olive',getolive)
routes.post('/postolive',postolive)
module.exports=routes   
