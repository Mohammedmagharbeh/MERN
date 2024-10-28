const express=require('express') 
const cors=require('cors');
// const { request } = require('../app');
const routes=express.Router();
require('dotenv').config();

// const {getcar}=require('../controllers/carcontroller')
// routes.get('/cars',getcar)
// module.exports=routes
    
const{getcar,postCar,updatecar,deletecar,carLogin,verify,home}=require('../controllers/carcontroller');
routes.get('/cars',getcar)
routes.post('/cars/postcar',postCar)
routes.put('/cars/:id',updatecar)
routes.delete('/cars/:id',deletecar);
routes.post('/cars/new',carLogin)
routes.get('/jwt',verify)
routes.get('/home',verify,home)

// routes.delete('/cars/:id/:field', deletecar);

module.exports=routes;