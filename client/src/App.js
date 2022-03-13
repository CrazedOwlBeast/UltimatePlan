import React, { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Goals from './pages/Goals';
import Weekly from './pages/Weekly';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Navbar from './components/Navbar'


const App = () => {

//const [loggedIn, setLoggedIn] = useState();
const [friendsList, setFriendsList] = useState(['Jane Doe']);

//Add Friend
const addFriend = (friend) => {
  const newList = friendsList.concat(friend);
  setFriendsList(newList);
}

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Weekly' element={<Weekly />}/>
        <Route path='/Goals' element={<Goals friendsList={friendsList}/>}/>
        <Route path='/Profile' element={<Profile addFriend={addFriend} friendsList={friendsList} />}/>
        <Route path='/Login' element={<Login />}/>
      </Routes>
    </div>
  )
}

export default App

