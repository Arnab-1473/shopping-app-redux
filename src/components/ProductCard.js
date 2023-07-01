import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../store/cartSlice';
import "./ProductCard.css";

const ProductCard = ({product}) =>{

    const dispatch = useDispatch();
    const products = useSelector(state => state.cartState.cartList);
    const [inCart, setInCart] = useState(false);
    const { id, title, thumbnail, price } = product;

    useEffect(() => {
        const productInCart = products.find(item => item.id === id);

        if(productInCart) {
            setInCart(true);
        } else {
            setInCart(false);
        }
    }, [products, id]);
    
  return (
    <div className='product-item'>
      <img src={thumbnail} alt={title} />
      <p className='name'>{title}</p>
      <p className='price'>&#36; {price}</p>

      {
        inCart? (<button onClick={() => dispatch(remove(product))}>Remove from Cart</button>) 
        : (<button onClick={() => dispatch(add(product))}>Add to Cart</button>)
      }
    </div>
  )
}

export default ProductCard
