import { createElement, React, useEffect, useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import './Goals.css'
import SharedGoal from '../components/SharedGoal'
import Goal from '../components/Goal'
import Dropdown from 'react-dropdown';

const Goals = () => {

  
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

  const [options, setOptions] = useState(['one', 'two', 'three']);
  const [goals_list, setGoalsList] = useState(['Goal 1', 'Goal 2', 'Goal 3']);
  const [goal_text, setGoalText] = useState();

  const [post_text, setPostText] = useState('');
  const [selected_goal, setSelectedGoal] = useState('');
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
  // const [post_users, postUser] = useState([]);
  // const [post_goals, postGoal] = useState([]);
  // const [post_updates, postUpdate] = useState([]);

  const handleNewGoal = (e) => {

    // let list = document.getElementsByClassName('ul')[0];
    // let entry = document.createElement('li');
    // entry.className = 'goal-item';
    // entry.appendChild(document.createTextNode(goal_text));
    // list.appendChild(entry);

    const newGoals = goals_list.concat(goal_text);
    setGoalsList(newGoals);

    const newList = options.concat(goal_text);
    setOptions(newList);

    setGoalText('');
  } 

  const handlePost = (e) => {
    let new_post = {
      id: posts.length,
      user: 'User',
      goal: selected_goal,
      update: post_text,
      date: new Date(),
    }
    const newList = posts.concat(new_post)
    setPosts(newList)
    setPostText('')
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
                <Goal goal={goal}/>
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
              options={options} 
              className='dropdown' 
              placeholder='Select a goal' 
              value={options[0]}
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