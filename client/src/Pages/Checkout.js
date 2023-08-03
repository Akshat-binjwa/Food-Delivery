import Nav from '../components/nav';
import './checkout.css'
function Checkout({ Cart, SetCart }) {

// console.log(Cart)
let SubTotal =0;

  Cart.filter((itm)=>{
    SubTotal+=parseInt(itm.price)
  })
  
  const UpdateCart=(e)=>{

    const NewCart= Cart.filter((Product)=>{
      if(Product.id!==e.id)
      {
       return Product
      }

    })
  
    SetCart(NewCart) 
  }
    
  return (
    <>
      <Nav Cart={Cart} />
      <div className='Container'>
        <div className='Main'>

          <div className='ShoppingCart'>
            <h3>Shopping Cart</h3>
            
            {
            
            Cart.map((Product) => (
            <div className='Product'>
              <div className='Image'>
                <img alt='Img here' src={Product.img}></img>
              </div>
              <div className='Description'>
                <h2>{Product.title}</h2>
                <h5>{Product.Discription}</h5>
                <p>₹{Product.price}</p>
                <button onClick={()=>UpdateCart(Product)}>Remove</button>
              </div>
            </div>))
            }
          </div>

          <div className='SubTotal'>
            <h3>SubTotal (Total items : {Cart.length})</h3>
            <h3>₹{SubTotal}</h3><br></br>
            <div><input type='checkbox'></input> This Order Contains Gift Item</div>
            <button>Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Checkout;