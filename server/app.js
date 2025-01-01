const express=require('express') 
const bodyParse=require('body-parser')
const cors=require('cors')
const dotenv=require('dotenv')
const connectDB=require('./config/db')
const userRoutes=require('./routes/userRoutes')
const productRoutes=require('./routes/productRoutes')
const carRoutse=require('./routes/carRoutes')
const rentRoutes=require('./routes/rentRoutes')
const adminRoutes=require('./routes/adminRoutes')
const oliveRoutes=require('./routes/oliveRoutes')



dotenv.config()
const app=express();
connectDB();

app.use(bodyParse.json())
app.use(cors());
app.use('/api',userRoutes)
app.use('/api',productRoutes)
app.use('/api',carRoutse)
app.use('/api',rentRoutes)
app.use('/api',adminRoutes)
app.use('/api',oliveRoutes)




module.exports=app; 