const express=require('express') 
const cors=require('cors');
const routes=express.Router();
require('dotenv').config();
const {getUsers,postuser,getusersnames, userLogin}=require('../controllers/usercontroller');
routes.get('/users',getUsers);
routes.post('/users/postnewuser',postuser);
routes.post('/login',userLogin)

// routes.get('/users/names',getusersnames);

module.exports=routes;