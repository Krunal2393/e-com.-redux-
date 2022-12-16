import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../Store/cartSlice';
import { Axios } from 'axios';
const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json(); 
      // Axios .get('https://fakestoreapi.com/products');
      console.log("data", data);
      setProducts(data);
    }
    fetchProducts();
  }, []);
 
const handleAdd = (product)=>{
  console.log(product)
  dispatch(add(product))

}


  return(
  <div className='productsWrapper'>
    {
      products.map(product =>(
        <div className='card' key={product.id}>
          <img src={product.image} alt=""/>
          <h4>{product.title}</h4>
          {/* <h4>RS</h4>
          <h5>{product.price}</h5> */}
          <div className='d-flex justify-content-center '>
          <h5 style={{textAlign:"left",float:"left"}}>RS.</h5>
          <h5 style={{textAlign:"right",float:"right"}} > {product.price} </h5>
            </div>
          <button onClick={() => handleAdd(product)}className='btns'>Add to cart</button>
          </div> 
      ))
    }
    
  </div>

  )

};

export default Products;
