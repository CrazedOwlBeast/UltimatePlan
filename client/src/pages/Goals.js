import { createElement, React, useEffect, useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import './Goals.css'
import SharedGoal from '../components/SharedGoal'
import Goal from '../components/Goal'
import Dropdown from 'react-dropdown';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Goals = ({friendsList, goals_list, posts, AddPost, AddGoal}) => {

  
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
  const [selected_goal, setSelectedGoal] = useState('');
  

  const handleNewGoal = (e) => {
    AddGoal(goal_text);

    // const newList = options.concat(goal_text);
    // setOptions(newList);

    setGoalText('');
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
          <div className='goals-container'>
            <div className='goals-content'>
              <div className='goals-category'>
                Goal Category
              </div>
              <ul className='ul' id='my-goals'>
              <>
              {goals_list.map((goal) => (
                <Goal key={uuidv4()} goal={goal} friendsList={friendsList}/>
              ))}
              </>
                {/* <li className='goal-item'>Goal</li>
                <li className='goal-item'>Goal</li>
                <li className='goal-item'>Goal</li> */}
              </ul>
            </div>
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