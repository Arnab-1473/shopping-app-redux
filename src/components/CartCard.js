import React from 'react'
import { useDispatch } from 'react-redux';
import {remove} from "../store/cartSlice"
import "./CartCard.css"

const CartCard = ({product}) => {

    const dispatch = useDispatch();

    const {title, thumbnail, price} = product;
    
  return (
    <div className='product'>
      <img src={thumbnail} alt={title}/>
      <p className='name'>{title}</p>
      <p className='price'>{price}</p>
      <button onClick={() => dispatch(remove(product))}>Remove From Cart</button>
    </div>
  )
}

export default CartCard;
