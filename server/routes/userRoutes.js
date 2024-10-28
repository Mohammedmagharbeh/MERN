const express=require('express') 
const cors=require('cors');
const routes=express.Router();
require('dotenv').config();
const {getUsers,postuser,getusersnames}=require('../controllers/usercontroller');
routes.get('/users',getUsers);
routes.post('/users/postnewuser',postuser);
// routes.get('/users/names',getusersnames);

module.exports=routes;