import {React, useState} from 'react'
import './DailyTask.css'
import { Button } from '@mui/material';

const DailyTask = ({Day, DayDate, tasks}) => {

  // const [task, setTask] = useState('');

  // const handleTask = (e) => {
  //   e.preventDefault();
    
  //   var x = 0;
  //   switch (Day) {
  //     case 'Monday':
  //       x = 1;
  //       break;
  //     case 'Tuesday':
  //       x = 2;
  //       break;
  //     case 'Wednesday':
  //       x = 3;
  //       break;
  //     case 'Thursday':
  //       x = 4;
  //       break;
  //     case 'Friday':
  //       x = 5;
  //       break;
  //     case 'Saturday':
  //       x = 6;
  //       break;
  //     case 'Sunday':
  //       x = 0;
  //       break;
  //     default:
  //       break;
  //   }

  //   let list = document.getElementsByClassName('ul')[x];
  //   let entry = document.createElement('li');
  //   entry.className = 'task-item';
  //   entry.appendChild(document.createTextNode(task));
  //   list.appendChild(entry);

  //   setTask('');
  // } 
  
  return (
    <div className='dailytask'>
      <div className='dailytask-content'>
        <div className='day-title'>
          <strong>{Day}</strong> {DayDate}
        </div>
        <div className='form-container'>
          <form className='form'>
            {/* <input autofocus className='input' 
            value={task}
            onChange={(e) => setTask(e.target.value)}
            /> */}
            {/* <button className='submit-btn' onClick={handleTask}>Submit</button> */}
          </form>
        </div>
        <div className='tasks-container'>
          {/* <p className='task-title'><strong>Tasks</strong></p> */}
          <ul className='ul'>
            <>
            {tasks.map((task) => (
              <li>{task}</li>
            ))}
            </>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DailyTask