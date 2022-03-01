import React from 'react'
import './DailyTask.css'
import { Button } from '@mui/material';

const DailyTask = ({Day}) => {

  
  return (
    <div className='dailytask'>
      <div className='dailytask-content'>
        <div className='day-title'>
          {Day}
        </div>
        <div className='form-container'>
          <form className='form'>
            <input className='input' placeholder='To-do' />
            <button className='submit-btn'>Submit</button>
          </form>
        </div>
        <div className='tasks-container'>
          <p className='task-title'>Tasks</p>
        </div>
      </div>
    </div>
  )
}

export default DailyTask