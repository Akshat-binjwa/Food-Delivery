const express = require('express')
const User= require('../Models/User')

const CreateUser=(req,res)=>{
        const{name,number,email,password,cpassword}= req.body;
        
    
        if(!name || !email || !number || !password || !cpassword )
        {
            return  res.status(422).json({message:"All Details are not Filled"});
        }
      
        User.findOne({email:email})
        .then((UserExist)=>{
            if(UserExist)
            {
                return   res.status(422).json({message:"User Already Exist"})
                
            }
            else if(password!=cpassword)
            {
                return   res.status(422).json({message:"Pass and Cpass must be same"})

            }
            if(isNaN(number))
            {
                return res.status(422).json({message:'Number must be a Number'})
        
            }
    
            User.create({name:name,email:email,number:number,password:password,cpassword:cpassword})
            .then(()=>{
                return res.status(200)
                .json({
                    message:'User Registered Successfully'
                })
            })
            .catch(()=>{ return res.send('Problem Occured')})
          
        }
        )
    
    }


module.exports= {CreateUser}