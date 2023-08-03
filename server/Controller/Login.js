const express= require('express')
const User= require('../Models/User')
const UserLogin=(req,res)=>{

    const {email,password}= req.body;

    if(!email || !password)
    {
        return res.status(422).json({message:'All field are not filled'})
    }
    if(isNaN(password))
    {
        return res.status(422).json({message:'Password must be a Number'})

    }
    User.findOne({email:email})
    .then((UserExist)=>{

        if(UserExist)
        {
            if(UserExist.password==password)
            {
            return res.status(200).json({message:"User Login Successfull"})

            }
            else
            {
            return res.status(422).json({message:"Icorrect apsss"})

            }
        }

        else if (!UserExist){
            return res.status(422).json({message:'User not Found'})
        }

    })
    .catch(()=>{return res.stauts(422).json({message: "Error Occured"})})


}
module.exports= {UserLogin}