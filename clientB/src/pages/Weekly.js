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


  return (
    <div className='weekly'>
      <div className='weekly-top-container'>
        <div className='date'>
          {theDay} <br/>
          {month} {day}, {year} 
        </div>
      </div>
      <div className='weekly-bottom-container'>
      < div className='sun'>
          <DailyTask Day='Sunday' DayDate={moment().startOf('week').add(0, "days").format("MMM Do YY")}/>
        </div>
        <div className='mon'>
         <DailyTask Day='Monday' DayDate={moment().startOf('week').add(1, "days").format("MMM Do YY")} />
        </div>
         <div className='tues'>
           <DailyTask Day='Tuesday' DayDate={moment().startOf('week').add(2, "days").format("MMM Do YY")}/>
        </div>
        <div className='wed'>
          <DailyTask Day='Wednesday' DayDate={moment().startOf('week').add(3, "days").format("MMM Do YY")}/>
        </div>
        <div className='thurs'>
          <DailyTask Day='Thursday' DayDate={moment().startOf('week').add(4, "days").format("MMM Do YY")}/>
        </div>
        <div className='fri'>
          <DailyTask Day='Friday' DayDate={moment().startOf('week').add(5, "days").format("MMM Do YY")}/>  
        </div>
        <div className='sat'>
          <DailyTask Day='Saturday' DayDate={moment().startOf('week').add(6, "days").format("MMM Do YY")}/>
        </div>
      </div>

    </div>
  )
}

export default Weekly