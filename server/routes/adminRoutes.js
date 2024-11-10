const express=require('express') 
const cors=require('cors');
const routes=express.Router();
require('dotenv').config();

const{getadmin,postadmin}=require('../controllers/admincontroller')
routes.get('/admins',getadmin)
routes.post('/admins/postanwedmin',postadmin)


module.exports=routes