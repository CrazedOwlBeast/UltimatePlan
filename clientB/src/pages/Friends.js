import React, { useState } from 'react'
import './Friends.css'

const Friends = ({friendsList, addFriend}) => {

    
    const [friend, setFriend] = useState('');

    const handleFriends = (e) => {
        e.preventDefault();
        
        addFriend(friend);

        setFriend('');
    }


  return (
    <div className='friends'>
        <div className='friend-form'>
        <h2>Add Friends</h2>
        <form className='form'>
            <input className='input' 
            value={friend}
            placeholder="Add Friend"
            id='add-friend-input'
            onChange={(e) => setFriend(e.target.value)}
            />
            <button id='submit-friend' className='submit-btn' onClick={handleFriends}>Submit</button>
        </form>
        <div className='friends-list'>
                <ul>
                    {friendsList.map((friend) => (
                        <li>{friend}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
       
  )
}

export default Friends