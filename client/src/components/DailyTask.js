import React from 'react'
import './DailyTask.css'
import { Button } from '@mui/material';

const DailyTask = ({Day}) => {

  
  return (
    <div className='dailytask'>
      <div className='dailytask-content'>
        <div className='daily-title'>
          {Day}
        </div>
        <div className='form-container'>
          <form className='form'>
            <input className='input' />
            <button className='submit-btn'>Submit</button>
          </form>
        </div>
        <div className='tasks-container'>
          <p className='daily-title'>Tasks</p>
        </div>
      </div>
    </div>
  )
}

export default DailyTask