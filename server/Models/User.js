const express= require('express');
const { default: mongoose } = require('mongoose');
const {Schema} = mongoose;

const UserSchema= new Schema({

    name:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type: String,
        required:true
    }


})
const User= mongoose.model('User',UserSchema)
module.exports= User;