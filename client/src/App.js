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

const [loggedIn, setLoggedIn] = useState(false);
const [friendsList, setFriendsList] = useState(['Jane Doe']);

//Add Friend
const addFriend = (friend) => {
  const newList = friendsList.concat(friend);
  setFriendsList(newList);
}

const setlogin = (loginBool) => {
  setLoggedIn(loginBool);
}

  return (
    <div>
      <Navbar loggedIn={loggedIn}/>
      <Routes>
        <Route path='/' element={<Home loggedIn={loggedIn} login={setlogin} />}/>
        <Route path='/Weekly' element={<Weekly loggedIn={loggedIn}/>}/>
        <Route path='/Goals' element={<Goals loggedIn={loggedIn} friendsList={friendsList}/>}/>
        <Route path='/Profile' element={<Profile loggedIn={loggedIn} addFriend={addFriend} friendsList={friendsList} />}/>
        <Route path='/Login' element={<Login login={setlogin} />}/>
      </Routes>
    </div>
  )
}

export default App

