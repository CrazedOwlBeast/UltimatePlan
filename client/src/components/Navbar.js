import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>    
            <li className='navbar-item'>
                <Link to='/' className='link'>
                    Home
                </Link>
            </li>
            <li className='navbar-item'>
                <Link to='/weekly' className='link'>
                    Weekly
                </Link>
            </li>
            <li className='navbar-item'>
                <Link to='/Goals' className='link'>
                    Goals
                </Link>
            </li>
        </nav>
    </div>
  )
}

export default Navbar