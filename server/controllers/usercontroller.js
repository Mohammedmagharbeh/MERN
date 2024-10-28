const User=require('../models/users')
const { unsubscribe } = require('../routes/userRoutes')

exports.getUsers=async(req,res)=>{
try{
    const users=await User.find()
    console.log(users)
    res.json(users) 
}
catch(error){
    res.status(500).json({error:error.message})
}
}

exports.getusersnames=async(req,res)=>{
try {
    const users=await User.find()
    // console.log('this is newfunction')  
    const usernames=users.map(
        user=>{
            var object={username:user.username}
            console.log(object)
            return object;
        }
    )
    // for(i=0;i<users.length;i++){
    //     console.log(users[i].userna
    // }
    res.json(usernames)
} catch (error) {
    res.status(500).json({message:error.message})

}

}


exports.createuser=async(req,res)=>{
    const{username,phone}=req.body
    try{
        const nweuser={username:username,phone:phone}
        console.log(nweuser)
        const dbuser=await User.create(nweuser)
        res.status(200).json({message:`User created successfully ${nweuser}`})
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
}