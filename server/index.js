// const express=require('express') 
// const mongoose=require('mongoose')
// const bodyParse=require('body-parser')
// const cors=require('cors')
// require('dotenv').config();

// // main app
// const app=express();

// app.use(bodyParse.json())
// app.use(cors())
// mongoose.connect(process.env.MONGO_URL,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true

// }).then(()=>console.log('connected to MONGODB'))
// .catch(err=>console.log(err))


// app.get('/test',(req,res)=>{
//     res.send('welcom')
// })
// const PORT=process.env.PORT||5000;
// app.listen(PORT,()=>{
//     console.log('server running on port')
// }) 

const app=require('./app')
const PORT =process.env.PORT||5000
app.listen(PORT,()=>{
    console.log(`server running ${PORT}`)
})