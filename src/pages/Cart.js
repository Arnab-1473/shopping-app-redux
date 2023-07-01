import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useTitle from '../hooks/useTitle';
import CartCard from '../components/CartCard';
import { removeAll } from '../store/cartSlice';
import "./cart.css"
const Cart = () => {
    const dispatch = useDispatch();
    let count = 1;
    useTitle('cart')

    const products = useSelector(state => state.cartState.cartList);
    const total = useSelector(state => state.cartState.total);

    return (
        <section className='cart'>
            <h1>My Cart</h1>
            <div className='myCart'>
                <div className='cartProduct'>
                    {
                        products.map(product => (
                            <CartCard key={product.id} product={product} />
                        ))
                    }
                </div>

                 <div className='cartList'>
                    <h2>Cart List</h2>
                    <div className='myList'>
                        {
                            products.map(product => (
                                <div className='single' key={product.id}>
                                    <div className='name'>{count++}. {product.title}</div>
                                    <div className='price'>${product.price} </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='listTotal'>
                        <div className='total'>Total</div>
                        <div className='totalPrice'> $ {total}</div>
                    </div>
                    <button onClick={()=>dispatch(removeAll())} className='checkout'>Click to Checkout</button>
                    </div>   
            </div>
        </section>
    )
}

export default Cart
