import React, { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Goals from './pages/Goals';
import Weekly from './pages/Weekly';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Navbar from './components/Navbar'
import Friends from './pages/Friends';


const App = () => {

const [loggedIn, setLoggedIn] = useState(false);
const [friendsList, setFriendsList] = useState(['Jane Doe']);
const [goals_list, setGoalsList] = useState(['Example Goal 1']);
const [posts, setPosts] = useState([
  { 
    id: 1,
    user: 'User',
    goal: 'random goal',
    update: 'random update',
    date: new Date('2022-01-10'),
  },
  { 
    id: 2,
    user: 'User',
    goal: 'random goal',
    update: 'random update',
    date: new Date('2022-02-10'),
  },
  { 
    id: 3,
    user: 'User',
    goal: 'random goal',
    update: 'random update',
    date: new Date('2022-03-10'),
  },
])

//Add Friend
const addFriend = (friend) => {
  const newList = friendsList.concat(friend);
  setFriendsList(newList);
}

const setlogin = (loginBool) => {
  setLoggedIn(loginBool);
}

//Add Goal
const AddGoal = (goal) => {
  const newList = goals_list.concat(goal);
  setGoalsList(newList);
}

//Add Post
const AddPost = (post) => {
  const newList = posts.concat(post);
  setPosts(newList);
}

  return (
    <div>
      <Navbar loggedIn={loggedIn}/>
      <Routes>
        <Route path='/' element={<Home loggedIn={loggedIn} login={setlogin} />}/>
        <Route path='/Weekly' element={<Weekly loggedIn={loggedIn}/>}/>
        <Route path='/Goals' element={<Goals posts={posts} goals_list={goals_list} AddPost={AddPost} AddGoal={AddGoal} loggedIn={loggedIn} friendsList={friendsList}/>}/>
        <Route path='/Friends' element={<Friends loggedIn={loggedIn} addFriend={addFriend} friendsList={friendsList}/>}/>
        <Route path='/Profile' element={<Profile loggedIn={loggedIn} addFriend={addFriend} friendsList={friendsList} />}/>
        <Route path='/Login' element={<Login login={setlogin} />}/>
      </Routes>
    </div>
  )
}

export default App

