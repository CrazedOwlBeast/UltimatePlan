import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Goal = ({goal, friendsList}) => {

  return (
    <div className='mygoal'>
      <div className='goal-container'>
        <p>{goal}</p>
      </div>
      <div className='status-container'>
          <Popup trigger={<button>Share</button>} position="right center">
          {close => (
          <div>
            <form className='form'>
            <select type='select' name='select' className='select-friend'>
              {friendsList.map((friend) => (
                <option value={friend}>{friend}</option>
              ))}
            </select>
            <button 
            type='submit'
            onClick={(e) => {
              alert('Goal shared with ' + document.getElementsByName('select')[0].value);
              close();
            }}
            >Share</button>
            </form>
          </div>
          )}
          </Popup>
          <button>Delete</button>
          <button>Edit</button>
      </div>
    </div>
  )
}

export default Goal