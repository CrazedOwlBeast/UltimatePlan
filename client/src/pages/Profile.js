import React from 'react'
import './Profile.css'

const Profile = () => {
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
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile