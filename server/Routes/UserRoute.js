const express= require('express');
const route= express.Router();
const {CreateUser}= require('../Controller/Registrer')
const {UserLogin}= require('../Controller/Login')
const FoodItems=require('../Models/Data')

route.post('/Register',CreateUser)
route.use('/Login',UserLogin)
route.get('/AllData',(req,res)=>{
    
    // res.send({FoodItems})
   FoodItems.find({})
    .then((mydata)=>{
        res.status(200).json(mydata)
    })
})
route.post('/AllData',(req,res)=>{
    
    const data= req.body;
    FoodItems.create(data)
    res.send(data)
    
})

module.exports= route;


//saving

// (req,res)=>{
//     const{name,number,email,password,cpassword}= req.body;
    


//     if(!name || !email || !number || !password || !cpassword )
//     {
//         return  res.status(422).json({message:"All Details are not Filled"});
//     }
//     else if(password != cpassword)
//     {
//         return res.status(400).json({message:"Pass and Confirm pass must be same"})
//     }
//     User.findOne({email:email})
//     .then((UserExist)=>{
//         if(UserExist)
//         {
//             return (  res.status(422).json({message:"User Already Exist"}))
            
//         }

//         User.create({name:name,email:email,number:number,password:password,cpassword:cpassword})
//         .then(()=>{
//             return res.status(200).json({message:'User Registered '})
//         })
//         .catch(()=>{ return res.send('Problem Occured')})
//         const user = new User(req.body)
//                user.save().then(()=>{ 
//                return res.status(200).json({message:'User Successfully Registered'})
//                })
//         .catch(()=>{
//                 return res.status(400).json({message:'Error Occured'})
//         })
//     }
//     )

// }