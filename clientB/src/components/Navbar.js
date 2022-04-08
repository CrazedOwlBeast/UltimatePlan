import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({loggedIn}) => {
  return (
    <div>
        <nav className='navbar'>    
            <li className='navbar-item'>
                <Link to='/' className='link'>
                    Home
                </Link>
            </li>
            {loggedIn ? 
            <>
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
            <li className='navbar-item'>
                <Link to='/Profile' className='link'>
                    Profile
                </Link>
            </li>
            </>
            : null} 
        </nav>
    </div>
  )
}

export default Navbar