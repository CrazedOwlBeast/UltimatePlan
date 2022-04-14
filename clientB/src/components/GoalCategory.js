import React from 'react'
import '../pages/Goals.css'
import Goal from './Goal'
import {v4 as uuidv4} from 'uuid'

const GoalCategory = ({category, goals_list, friendsList}) => {

  return (
    <div className='goals-content'>
        <div className='goals-category'>
            {category}
        </div>
        <ul className='ul' id='my-goals'>
        <>
            {goals_list.map((goal) => (
            goal.category===category ? <Goal key={uuidv4()} goal={goal.value} friendsList={friendsList}/> : null
            ))}
        </>
        </ul>
    </div>
  )
}

export default GoalCategory