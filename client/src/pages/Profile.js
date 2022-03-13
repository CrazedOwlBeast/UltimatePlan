import React, { useState } from 'react'
import './Profile.css'

const Profile = () => {

    const [friendsList, setFriendsList] = useState(['Jane Doe']);
    const [friend, setFriend] = useState('');

    const handleFriends = (e) => {
        e.preventDefault();
        const newList = friendsList.concat(friend);
        setFriendsList(newList);
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
                    onChange={(e) => setFriend(e.target.value)}
                    />
                    <button className='submit-btn' onClick={handleFriends}>Submit</button>
                </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile