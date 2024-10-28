const express=require('express') 
const cors=require('cors');
const routes=express.Router();
require('dotenv').config();
const {getUsers,createuser,getusersnames}=require('../controllers/usercontroller');
routes.get('/users',getUsers);
routes.post('/users',createuser);
routes.get('/users/names',getusersnames);

module.exports=routes;