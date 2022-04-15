import { React, useState, useEffect } from 'react'
import DailyTask from '../components/DailyTask'
import './Weekly.css'
import Moment from 'react-moment';
import 'moment-timezone';

const Weekly = () => {


  const monthList = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const [ theDay, setTheDay ] = useState('');
  const date = new Date();
  const month = monthList[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const today = new Date();

  var moment = require('moment'); 

  var startOfWeek = moment().startOf('week').add(1, "days").format("MMM Do YY");
  console.log(startOfWeek);

   useEffect(() => {
     getDay();
  
  });

  const getDay = () => {
    const day = today.getDay();
    console.log(day);
    switch(day) {
      case 0:
        setTheDay('Sunday');
        return;
      case 1:
        setTheDay('Monday');
        return;
      case 2:
        setTheDay('Tuesday');
        return;
      case 3:
        setTheDay('Wednesday');
        return;
      case 4:
        setTheDay('Thursday');
        return;
      case 5:
        setTheDay('Friday');
        return;
      case 6:
        setTheDay('Saturday');
        return;
    }

    console.log(theDay);
  }  

  const [input, setInput] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [monTasks, setMonTasks] = useState([]);
  const [tuesTasks, setTuesTasks] = useState([]);
  const [wedTasks, setWedTasks] = useState([]);
  const [thursTasks, setThursTasks] = useState([]);
  const [friTasks, setFriTasks] = useState([]);
  const [satTasks, setSatTasks] = useState([]);
  const [sunTasks, setSunTasks] = useState([]);
  
  const handleButton = (e) => { 
    setSelectedDay(e.target.value)
    for (var i=0; i<7; i++)
    document.getElementsByClassName('day-btn')[i].style.backgroundColor = 'rgb(145, 185, 223)'

    e.target.style.backgroundColor = 'rgb(194, 222, 248)'  
  }

  const postTask = (e) => {

    switch(selectedDay) {
      case '1':
        setMonTasks(monTasks.concat(input));
        break;
      case '2':
        setTuesTasks(tuesTasks.concat(input));
        break;
      case '3':
        setWedTasks(wedTasks.concat(input));
        break;
      case '4':
        setThursTasks(thursTasks.concat(input));
        break;
      case '5':
        setFriTasks(friTasks.concat(input));
        break;
      case '6':
        setSatTasks(satTasks.concat(input));
        break;
      case '7':
        setSunTasks(sunTasks.concat(input));
        break; 
      default:
        alert('Please select a day');
    }

    setInput('')
  }

  return (
    <div className='weekly'>
      <div className='weekly-top-container'>
        <div className='date'>
          {theDay} <br/>
          {month} {day}, {year} 
        </div>
      </div>
      <div className='bottom-container'>
      <div className='weekly-bottom-container'>
        <div className='day'>
         <DailyTask Day='Monday' tasks={monTasks} DayDate={moment().startOf('week').add(1, "days").format("MMM Do YY")} />
        </div>
         <div className='day'>
           <DailyTask Day='Tuesday' tasks={tuesTasks} DayDate={moment().startOf('week').add(2, "days").format("MMM Do YY")}/>
        </div>
        <div className='day'>
          <DailyTask Day='Wednesday' tasks={wedTasks} DayDate={moment().startOf('week').add(3, "days").format("MMM Do YY")}/>
        </div>
        <div className='day'>
          <DailyTask Day='Thursday' tasks={thursTasks} DayDate={moment().startOf('week').add(4, "days").format("MMM Do YY")}/>
        </div>
        <div className='day'>
          <DailyTask Day='Friday' tasks={friTasks} DayDate={moment().startOf('week').add(5, "days").format("MMM Do YY")}/>  
        </div>
        <div className='day'>
          <DailyTask Day='Saturday' tasks={satTasks} DayDate={moment().startOf('week').add(6, "days").format("MMM Do YY")}/>
        </div>
        < div className='day'>
          <DailyTask Day='Sunday' tasks={sunTasks} DayDate={moment().startOf('week').add(0, "days").format("MMM Do YY")}/>
        </div>
      </div>
      <div className='post'>
        <h3>Add Task</h3>
        <div className='day-btn-container'>
          <div>
            <button className='day-btn' value='1' onClick={handleButton}>M</button>
          </div>
          <div>
            <button className='day-btn' value='2' onClick={handleButton}>T</button>
          </div>
          <div>
            <button className='day-btn' value='3' onClick={handleButton}>W</button>
          </div>
          <div>
            <button className='day-btn' value='4' onClick={handleButton}>H</button>
          </div>
          <div>
            <button className='day-btn' value='5' onClick={handleButton}>F</button>
          </div>
          <div>
            <button className='day-btn' value='6' onClick={handleButton}>Sa</button>
          </div>
          <div>
            <button className='day-btn' value='7' onClick={handleButton}>Su</button>
          </div>
        </div>
        <div className='post-input-container'>
          <textarea placeholder="Add a task" value={input} onChange={(e) => setInput(e.target.value)} className='weekly-post-input'/> 
        </div>
          <button className='submit-btn' onClick={postTask}>Submit</button>
      </div>
    </div>
      </div>
    
  )
}

export default Weekly