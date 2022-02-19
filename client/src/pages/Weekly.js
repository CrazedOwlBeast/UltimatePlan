import React from 'react'
import DailyTask from '../components/DailyTask'
import './Weekly.css'

const Weekly = () => {


  const monthList = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const date = new Date();
  const month = monthList[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();


  return (
    <div className='weekly'>
      <div className='weekly-top-container'>
        <div className='date'>
          {month} {day}, {year}
        </div>
      </div>
      <div className='weekly-bottom-container'>
        <DailyTask Day='Monday'/>
        <DailyTask Day='Tuesday'/>
        <DailyTask Day='Wednesday'/>
        <DailyTask Day='Thursday'/>
        <DailyTask Day='Friday'/>
        <DailyTask Day='Saturday'/>
        <DailyTask Day='Sunday'/>
      </div>

    </div>
  )
}

export default Weekly