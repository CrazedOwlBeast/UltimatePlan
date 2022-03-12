import React from 'react'
import axios from "axios"

async function callLogin(e) {
  try {
    await axios.get("http://localhost:5000");
  } catch (err) {
    console.error(err);
  }
  
}

const Home = () => {
  return (
    <div>
      <button onClick={callLogin}>Login</button>
        Home
    </div>
  )
}

export default Home