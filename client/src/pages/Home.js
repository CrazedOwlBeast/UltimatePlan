import React from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import './Home.css'

async function callLogin(e) {
  try {
    await axios.get("http://localhost:5000");
  } catch (err) {
    console.error(err);
  }
  
}

const Home = () => {
  return (
    <div className='home'> 
      {/* <button onClick={callLogin}>Login</button> */}
      <h1>Welcome to Ultimate Plan!</h1>
      <p className='home-description'>Our application allows you to keep track of your goals and plans</p>
      <div className='home-login-container'> 
          <Link to='/Login' onClick={callLogin} className='home-login'>
              Click here to get started
          </Link>
      </div>
    </div>
  )
}

export default Home