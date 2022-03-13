import React from 'react'

const Goal = ({goal}) => {

  
  return (
    <div className='mygoal'>
      <div className='goal-container'>
        <p>{goal}</p>
      </div>
      <div className='status-container'>
          <button>Share</button>
          <button>Delete</button>
          <button>Edit</button>
      </div>
    </div>
  )
}

export default Goal