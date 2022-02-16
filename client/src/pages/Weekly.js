import React from 'react'
import DailyTask from '../components/DailyTask'
import './Weekly.css'

const Weekly = () => {
  return (
    <div className='weekly'>
      <DailyTask Day='Monday'/>
      <DailyTask Day='Tuesday'/>
      <DailyTask Day='Wednesday'/>
      <DailyTask Day='Thursday'/>
      <DailyTask Day='Friday'/>
      <DailyTask Day='Saturday'/>
      <DailyTask Day='Sunday'/>
    </div>
  )
}

export default Weekly