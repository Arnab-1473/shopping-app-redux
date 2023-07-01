import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import "./Header.css"
const Header = () =>{

    const products = useSelector(state => state.cartState.cartList)

  return (
    <header>
        <Link to="/" className='logo'>
            <img />
            <span>Shopping cart</span>
        </Link>

        <nav className='navigate-link'>
            <NavLink to="/" className="link"> Home </NavLink>
            <NavLink to="/cart" className="link"> Cart </NavLink>
        </nav>
        
        <Link to="/cart" className='items'>
            <span>Cart : {products.length}</span>
        </Link>
    </header>
  )
}

export default Header;
