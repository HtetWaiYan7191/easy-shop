import React from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center border border-b-1'>
      <h1 className='text-3xl font-semibold ps-10 py-5'>Easy Shop</h1>
      <ul className='flex '>
        <li className='me-5'><NavLink to="/">Products</NavLink></li>
        <li className='me-5'><NavLink to="/favorite">Favorite</NavLink></li>
        <li className='me-10'><NavLink to="/cartItems">CartItems</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
