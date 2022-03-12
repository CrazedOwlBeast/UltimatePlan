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
        <div className='mon'>
         <DailyTask Day='Monday'/>
        </div>
         <div className='tues'>
           <DailyTask Day='Tuesday'/>
        </div>
        <div className='wed'>
          <DailyTask Day='Wednesday'/>
        </div>
        <div className='thurs'>
          <DailyTask Day='Thursday'/>
        </div>
        <div className='fri'>
          <DailyTask Day='Friday'/>  
        </div>
        <div className='sat'>
          <DailyTask Day='Saturday'/>
        </div>
        <div className='sun'>
          <DailyTask Day='Sunday'/>
        </div>
      </div>

    </div>
  )
}

export default Weekly