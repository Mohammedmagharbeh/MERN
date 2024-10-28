const express=require('express') 
const cors=require('cors');
const routes=express.Router();
require('dotenv').config();
const {getproducts,getcategory,UpdateProducts}=require('../controllers/productcontroller');
routes.get('/products',getproducts)
routes.post('/products/cat',getcategory)
routes.put('/products/:id',UpdateProducts)

// routes.get('/products/new',newgetpro)
module.exports=routes   