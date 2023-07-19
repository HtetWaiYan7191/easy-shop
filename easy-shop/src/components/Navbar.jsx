import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [inputSearch, setInputSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/details/${inputSearch}`)
  };
  return (
    <nav className='flex justify-between items-center border border-b-1'>
      <Link to="/"><h1 className='text-3xl font-semibold ps-10 py-5'>Easy Shop</h1></Link>
        <form onSubmit={handleSubmit}>
          <input type="text" value={inputSearch} onChange={(e) => setInputSearch(e.target.value)}  placeholder='Search  Product'  className=' outline-none border-b-2  focus:outline-none focus:border-b-teal-600   border-b-teal-300 placeholder:ps-1 ps-2'/>
        </form>
      <ul className='flex '>
        <li className='me-5'><NavLink to="/">Products</NavLink></li>
        <li className='me-5'><NavLink to="/favorite">Favorite</NavLink></li>
        <li className='me-10'><NavLink to="/cartItems">CartItems</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
