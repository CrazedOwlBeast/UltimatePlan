import { createElement, React, useEffect, useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import './Goals.css'
import SharedGoal from '../components/SharedGoal'
import Goal from '../components/Goal'
import Dropdown from 'react-dropdown';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import GoalCategory from '../components/GoalCategory'

const Goals = ({categoryList, AddCategory, friendsList, goals_list, posts, AddPost, AddGoal}) => {

  
  // const axios = require('axios');

  // const handlePost = () => {
  //     axios.put('/share/:id', {
  //         // text: 'testing the post',
  //         // user: 'testUser'
  //       })
  //       .then(function (response) {
  //         console.log(response);
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   }

  // const handleGoalPost = () => {
  //   axios.post('/', {
  //       text: 'testing the post',
  //       user: 'testUser'
  //     })
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  //   }


  // useEffect(() => {
  //   axios.get('/mygoals')
  //   .then(function (response) {
  //     options = JSON.parse(response);
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   })
  // });

  //const [options, setOptions] = useState(['']);
  const [goal_text, setGoalText] = useState();
  const [post_text, setPostText] = useState('');
  const [category_text, setCategoryText] = useState('');
  const [selected_goal, setSelectedGoal] = useState('');
  

  const handleNewGoal = (e) => {
    if (goal_text==='') {
      alert('Please describe the goal')
      return
    }
    if (category_text==='') {
      alert('Please choose a category')
      return
    }
    let new_goal = {
      value: goal_text,
      label: goal_text,
      category: category_text,
    }
    AddGoal(new_goal);

    if (!categoryList.includes(category_text)) {
      AddCategory(category_text)
    }

    setGoalText('');
    setCategoryText('')
  } 

  const handlePost = (e) => {
    console.log(selected_goal);
    if (!selected_goal) {
      alert('Please select a goal to post the update for')
    }
    else {
    let new_post = {
      id: uuidv4(),
      user: 'User',
      goal: selected_goal,
      update: post_text,
      date: new Date(),
    }
    AddPost(new_post);
    setPostText('');
    }
  }
  
  return (
    <div className='goals'>
        <div className='goals-left-container'> 
          <div className='new-goal-container'>
            <div className='new-goal'>
             <textarea 
              className='new-goal-input' 
              placeholder='Add new goal'
              value={goal_text}
              onChange={(e) => setGoalText(e.target.value)}
              ></textarea>
             <button className='post-goal-btn' onClick={handleNewGoal}>Post</button>
            </div>
              
          </div>
          <div id="select">
                  <h3>Choose Goal Category</h3>
                  <input 
                     id="goals-input" 
                    placeholder='Add New Category'
                    value={category_text}
                    onChange={(e) => setCategoryText(e.target.value)}
                  />
                  <p>Or</p>
                  <Dropdown 
                    options={categoryList} 
                    className='dropdown' 
                    placeholder='Choose Existing Category' 
                    value='Choose Existing Category'
                    onChange={(e)=>setCategoryText(e.value)}
                  />
              </div>
          <div className='goals-container'>
          <ul>
            <>
            {categoryList.map((category) => (
              <GoalCategory goals_list={goals_list} category={category} friendsList={friendsList}/>
            ))}
            </>
            </ul>
          </div>
        </div>
        <div className='goals-right-container'>
          <div className='goals-input'>
            <div className='goals-post-content'>
              <Dropdown 
              options={goals_list} 
              className='dropdown' 
              placeholder='Select a goal' 
              value='Select a goal'
              onChange={(e)=>setSelectedGoal(e.value)}
              />
              <textarea 
              className='post-input' 
              placeholder='Post an update'
              value={post_text}
              onChange={(e) => setPostText(e.target.value)}
              ></textarea>
              <button className='post-btn' onClick={handlePost}>Post</button>
            </div>
          </div>
          <div className='feed'>
            <>
              {posts.map((post) => (
                <SharedGoal key={post.id} user={post.user} goal={post.goal} update={post.update}/>
              )).sort((a, b) => b.date-a.date).reverse()}
            </>
          </div>
        </div>
    </div>
    
  )
}

export default Goals