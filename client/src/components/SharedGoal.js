import  {React } from 'react'
import './SharedGoal.css'
import { FaRegHeart } from 'react-icons/fa';

const SharedGoal = ({user, goal, update}) => {

  return (
    <div className='sharedgoal'>
        <div className='sharedgoal-content'>
            <div className='user-container'>
                <p className='user'>{user}</p>
            </div>
            <div className='goal-container'>
                <p className='goal'>{goal}</p>
            </div>
            <div className='update-container'>
                <p className='update'>{update}</p>
            </div>
            <div className='status-container'>
            </div>
        </div>
    </div>
  )
}

export default SharedGoal