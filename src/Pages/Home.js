import React from 'react'
import Product  from '../Components/Products'

function Home  () {
  return (
    <div>
      <h1>
      home
      </h1>
    
    {/* <img src='./images/ecommerce-software.webp' style={{height:"100%",width:"100%",opacity:"1"}}></img> */}
    <h2 className='heading'>Welcome to the online shopping</h2>
    <section>
      <h3>
        Products
      </h3>
      <Product/>
    </section>
    </div>
  )
}

export default Home
