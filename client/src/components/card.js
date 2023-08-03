import React from 'react'
import '../Pages/pages.css'
export default function card({Cart,SetCart,title,price,img,Discription,id}) {

  const AddToCart=(e)=>{
    
    
        SetCart([...Cart,{title,price,img,Discription,id}]);
  }

  return (
    <>
      <section className='card-section '>
        <div className="card all-cards" style={{ width: '18rem' }}>
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h3 className="card-title" >{title}</h3> <hr />
            <b><p className="card-text">{Discription}</p></b>
          <div className='card-detail'>

            <select style={{ padding: '3px' }}>
              <option>Half</option>
              <option>Full</option>
            </select>
            <select style={{ padding: '3px' }}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <span className='btn btn-primary' style={{ marginLeft: '10px' }}>PR₹:{price}</span>
            <span onClick={AddToCart} className='btn btn-primary' style={{  }}>Cart </span>

          </div>
          </div>
        </div>
      </section>
    </>

  )
}
