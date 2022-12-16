import React from 'react'
import { Link } from 'react-router-dom';
import{useSelector} from 'react-redux';



function Navbar() {
  const items = useSelector((state) => state.cart);
  console.log(items);

  return (
    <div style={{ display: 'flex', alignitem: 'center', justifyContent: 'space-between', border: "dotted", boxShadow: "9px 4px 5px 3px grey" }} >
      <img src='./images/logo.png' style={{ height: "90PX", width: "100px", margin: 'initial' }}></img>
    

      <div style={{
        margin: "30px 10px 10px 10px"
      }}>
        <Link className='navLink' to="/Home">Home</Link>
        <Link className='navLink' to="/Cart">Cart</Link>
        <img src='./images/cart.png' style={{ height: "40px", width: "40px", margin: 'initial' }}></img>
        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 90 90" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg> */}

        <span className='cartCount'>Cart Item:{ items.length} </span>
      </div>
    </div>
  )
}

export default Navbar
