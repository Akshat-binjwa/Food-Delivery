import React from 'react'
import Nav from '../components/nav'
export default function Contact({Cart,SetCart}) {
  return (
    <>
    <div>
        <Nav Cart={Cart} SetCart={SetCart}/>
    </div>

    <div className='container'>Contact</div>
    </>
  )
}
