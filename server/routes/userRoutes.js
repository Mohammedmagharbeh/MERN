const express=require('express') 
const cors=require('cors');
const routes=express.Router();
require('dotenv').config();
const {getUsers,postuser,getusersnames, userLogin,verify}=require('../controllers/usercontroller');
routes.get('/users',getUsers);
routes.post('/users/postnewuser',postuser);
// for token login page استخدم الرابط هاد
routes.post('/login',userLogin)
routes.get('/jwt',verify)

// routes.get('/users/names',getusersnames);
    
module.exports=routes;