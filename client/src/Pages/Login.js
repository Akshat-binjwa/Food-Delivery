import React, { useState } from 'react'
import Nav from '../components/nav';
import { useNavigate } from 'react-router-dom';

export default function Login({Cart}) {
  const history= useNavigate();
  const[User,SetUser]= useState(
    {
      email:'',
      password:''
    }
  )

  const HandleUser=(e)=>{
    const name=e.target.name;
    const value=e.target.value
   
    SetUser({...User,[name]:[value]})

  }

  const PostingData= async (e)=>{
  e.preventDefault();
   
    const {email,password}= User   ;

    const data= await fetch('/Login',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        email,password
      })
    })
    const res= await data.json();
    
    if(res.message ==='User Login Successfull')
    {
      history('/')
    }
    window.alert(res.message)

  }

  return (
    <>
      <Nav Cart={Cart} />
      <center>


        <form method='POST' className='reg-form'>
          <h1><u>LOGIN</u></h1>
          <br></br>

          <div className="form-group">
            <label >Email</label>
            <input type="text" className="form-control" onChange={HandleUser} name='email' value={User.email}  placeholder="Enter Email" />
            <br></br>

          </div>


          <div className="form-group">
            <label >Password</label>
            <input type="password" className="form-control" onChange={HandleUser} name='password' value={User.password}  placeholder="Enter Password" />
            <br></br>

          </div>


          <br></br>
          <button onClick={PostingData} type="submit" className="btn btn-primary">Submit</button>
        </form>
      </center>
    </>
  )
}
