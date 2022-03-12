import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Goals from './pages/Goals';
import Weekly from './pages/Weekly';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Navbar from './components/Navbar'


const App = () => {

//const [loggedIn, setLoggedIn]

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Weekly' element={<Weekly />}/>
        <Route path='/Goals' element={<Goals />}/>
        <Route path='/Profile' element={<Profile />}/>
        <Route path='/Login' element={<Login />}/>
      </Routes>
    </div>
  )
}

export default App

