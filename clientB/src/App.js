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
const [goals_list, setGoalsList] = useState([
  {
    value: 'Example Goal 1',
    label:'Example Goal 1',
    category: 'School Work'
  }
]);
const [categoryList, setCategoryList] = useState(['School Work'])
const [posts, setPosts] = useState([
  { 
    id: 1,
    user: 'Jane Doe',
    goal: 'Run a 5k by August',
    update: 'Just jogged 3 miles without stopping!',
    date: new Date('2022-01-10'),
  },
  { 
    id: 2,
    user: 'John Doe',
    goal: 'Improve grades',
    update: 'Aced an exam today!',
    date: new Date('2022-02-10'),
  },
  { 
    id: 3,
    user: 'Jill Doe',
    goal: 'Get a car',
    update: 'Earned 500 dollars today!',
    date: new Date('2022-03-10'),
  },
])

const AddCategory = (category) => {
  const newList = categoryList.concat(category);
  setCategoryList(newList);
}

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
        <Route path='/Goals' element={<Goals categoryList={categoryList} AddCategory={AddCategory} posts={posts} goals_list={goals_list} AddPost={AddPost} AddGoal={AddGoal} loggedIn={loggedIn} friendsList={friendsList}/>}/>
        <Route path='/Friends' element={<Friends loggedIn={loggedIn} addFriend={addFriend} friendsList={friendsList}/>}/>
        <Route path='/Profile' element={<Profile loggedIn={loggedIn} addFriend={addFriend} friendsList={friendsList} />}/>
        <Route path='/Login' element={<Login login={setlogin} />}/>
      </Routes>
    </div>
  )
}

export default App

