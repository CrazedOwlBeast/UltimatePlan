import { createElement, React, useEffect, useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import './Goals.css'
import SharedGoal from '../components/SharedGoal'
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
  const [goal_text, setGoalText] = useState('');

  const handleNewGoal = (e) => {
    console.log('didnt get here');
    let list = document.getElementsByClassName('ul')[0];
    let entry = document.createElement('li');
    entry.className = 'goal-item';
    entry.appendChild(document.createTextNode(goal_text));
    list.appendChild(entry);

    const newList = options.concat(goal_text);
    setOptions(newList);

    setGoalText('');
  } 

  const handlePost = (e) => {
    
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
                <li className='goal-item'>Goal</li>
                <li className='goal-item'>Goal</li>
                <li className='goal-item'>Goal</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='goals-right-container'>
          <div className='goals-input'>
            <div className='goals-post-content'>
              <Dropdown options={options} className='dropdown' placeholder='Select a goal' />
              <textarea className='post-input' placeholder='Post an update'></textarea>
              <button className='post-btn' onClick={handlePost}>Post</button>
            </div>
          </div>
          <div className='feed'>
            <SharedGoal user='User' goal='This is a random goal' update='This is a random update for the goal'/>
            <SharedGoal user='User' goal='This is a random goal' update='This is a random update for the goal'/>
            <SharedGoal user='User' goal='This is a random goal' update='This is a random update for the goal'/>
          </div>
        </div>
    </div>
    
  )
}

export default Goals