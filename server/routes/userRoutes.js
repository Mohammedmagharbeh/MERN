const express=require('express') 
const cors=require('cors');
const routes=express.Router();
require('dotenv').config();
const {getUsers,postuser,getusersnames,deleteuser, userLogin,verify,home}=require('../controllers/usercontroller');
routes.get('/users',getUsers);
routes.post('/users/postnewuser',postuser);
// for token login page استخدم الرابط هاد
routes.post('/login',userLogin)
routes.get('/jwt',verify)
routes.get('/home',verify,home);
routes.delete('/users/deleteuser',deleteuser)


// routes.get('/users/names',getusersnames);
    
module.exports=routes;