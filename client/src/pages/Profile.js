import React, { useState } from 'react'
import './Profile.css'

const Profile = ({friendsList, addFriend}) => {

    
    const [friend, setFriend] = useState('');

    const handleFriends = (e) => {
        e.preventDefault();
        
        addFriend(friend);

        setFriend('');
    }


  return (
    <div className='profile'>
        <div className='profile-container'>
            <div className='profile-content'>
                <div className='profile-top'>
                    <div className='icon'>
                    </div>
                    <div className='name'>
                        Person name
                    </div>
                </div>
                <div className='profile-bottom'>
                    <div className='bottom-content'>
                        <p>Email</p>
                        <p>Friends</p>
                        <div className='friends-list'>
                            <ul>
                                {friendsList.map((friend) => (
                                    <li>{friend}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='friend-form'>
                <form className='form'>
                    <input className='input' 
                    value={friend}
                    placeholder="Add Friend"
                    id='add-friend-input'
                    onChange={(e) => setFriend(e.target.value)}
                    />
                    <button id='submit-friend' className='submit-btn' onClick={handleFriends}>Submit</button>
                </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile