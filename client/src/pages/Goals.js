import React from 'react'
import './Goals.css'
import SharedGoal from '../components/SharedGoal'

const Goals = () => {


  return (
    <div className='goals'>
        <div className='goals-left-container'> 
          <div className='goals-container'>
            <div className='goals-content'>
              <div className='goals-category'>
                Category
              </div>
              <ul className='ul'>
                <li className='goal-item'>Test</li>
                <li>Test</li>
                <li>Test</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='goals-right-container'>
          <div className='goals-input'>
            <div className='goals-post-content'>
              <textarea className='post-input' placeholder='Post an update'></textarea>
              <button className='post-btn'>Post</button>
            </div>
          </div>
          <div clsasName='feed'>
            <SharedGoal user='User' goal='This is a random goal' update='This is a random update for the goal'/>
            <SharedGoal user='User' goal='This is a random goal' update='This is a random update for the goal'/>
            <SharedGoal user='User' goal='This is a random goal' update='This is a random update for the goal'/>
          </div>
        </div>
    </div>
  )
}

export default Goals