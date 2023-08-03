import React, { useEffect, useState } from 'react'
import Nav from '../components/nav'
import './pages.css'
import Card from '../components/card'
import axios from '../axios'
export default function Home({Cart,SetCart}) {

  const [alldata,Setdata]=useState([])
  useEffect(()=>{
    const showdata= async ()=>{
      const data= await axios.get('/AllData')
      // console.log(data)
      Setdata(data.data)
    }
    showdata();
  },[])
  return (
    <>
      <Nav Cart={Cart} SetCart={SetCart} />
      <section className=' body-1 center'>
        <div className='container'>
          <div className='content  '>
            <center>

              <form className='form'>
                <span className='content-text'> <i>Delicious Food !</i></span><br></br><br></br>
                <div>
                  <input type='text' className='text-white input' placeholder='Search here'></input>
                  <button type='button' className='button'>Enter</button>
                </div>
              </form>
            </center>
          </div>
        </div>
      </section>
      <section className='card-area'>
      {
     
        alldata.map((data)=>( <Card Cart={Cart} SetCart={SetCart} id={data._id} Discription='Delicious FarmHouse Pizza which is loaded with cheese and Toppings' img={data.img} price={data.price} title={data.name} />))
      
      }
      </section>
    </>
  )
}
