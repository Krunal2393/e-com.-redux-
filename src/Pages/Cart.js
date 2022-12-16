import React from 'react';

import { useSelector,useDispatch} from 'react-redux';
import {remove} from '../Store/cartSlice'
function Cart() {
  const dispatch =  useDispatch();
  const products = useSelector((state) => state.cart);
   console.log(products.title);
   console.log("products ", products)
  const handleRemove = (productId) =>{
    dispatch(remove(productId));
  
    
  };
  return (
    <>
    <div className='card'>
      <h3>ONLY ONE STEP REQUIRED TO GET THESE PRODUCT</h3>
      <div className='cartwrapper'>
        {
          products.map((product) => (
            <div key={product?.id} className=''>
              <img src={product?.image} alt="" />
              <h5>{product?.title}</h5>
              <h5>{product?.price}</h5>
              <button className='btns' onClick={() => handleRemove(product.id)}>REMOVED</button>


            </div>
          ))
        }
      </div>
    </div>
    </>

  );
};
export default Cart
