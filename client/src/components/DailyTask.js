import React from 'react'
import './DailyTask.css'
import { Button } from '@mui/material';

const DailyTask = ({Day}) => {
  return (
    <div className='dailytask'>
      <div className='heading'>
        {Day}
      </div>
      <div className='form-container'>
        <form className='form'>
          <input className='input' />
          {/* <button>Submit</button> */}
        </form>
      </div>
    
    </div>
  )
}

export default DailyTask