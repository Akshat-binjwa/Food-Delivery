import React, { useState } from 'react'
import Nav from '../components/nav'
import './pages.css'
import {useNavigate } from "react-router-dom";

export default function Register({Cart}) {

  const history= useNavigate();

  const [user,setUser]=useState({
    name:'',email:'',number:'',password:'',cpassword:''
  })

  let name,value;

  const handleInputs=(e)=>{
      name=e.target.name;
      value=e.target.value;
      setUser({...user,[name]:value})

  }
  

  const postData= async (e)=>{
      
    e.preventDefault();

    const {name,email,number,password,cpassword}= user;

    const res= await fetch('/register',{
        method:'POST',
        headers:{
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          name,email,number,password,cpassword
        })
    });
      const data= await res.json()
      
      if(data.message === "User Registered Successfully")
      {
        history('/login')
      }
      window.alert(data.message);
  }

  return (
    <>
      <Nav Cart={Cart} />
      <center>


        <form method='POST' className='reg-form'>
          <h1><u>REGISTER</u></h1>
          <br></br>
          <div className="form-group">
            <label>Name</label><br></br>
            <input type="email" autoComplete='off' className="form-control" id="exampleInputName" name='name' onChange={handleInputs} value={user.name} placeholder="Enter Name" />
            <br></br>
          </div>
          <div className="form-group">
            <label >Email</label>
            <input type="text"  autoComplete='off' className="form-control" name='email' onChange={handleInputs} value={user.email} placeholder="Enter Email" />
            <br></br>

          </div>
          <div className="form-group">
            <label >Number</label>
            <input type="text" className="form-control" name='number' onChange={handleInputs} value={user.number} placeholder="Enter Number" />
            <br></br>

          </div>
          <div className="form-group">
            <label >Password</label>
            <input type="password" className="form-control" name='password' onChange={handleInputs} value={user.password} placeholder="Enter Password" />
            <br></br>

          </div>
          <div className="form-group">
            <label >Confirm Password</label>
            <input type="password" className="form-control" name='cpassword' onChange={handleInputs} value={user.cpassword} placeholder="Enter Password again" />
            <br></br>

          </div>
          <br></br>
          <button onClick={postData} type="submit" className="btn btn-primary">Submit</button>
        </form>
      </center>
    </>
  )
}
