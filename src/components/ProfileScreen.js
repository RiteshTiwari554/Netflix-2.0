import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../backend/firebase';
import { selectUser } from '../features/userSlice';
import '../styles/ProfileScreen.css';
import Nav from './Nav';


function ProfileScreen() {
  const user = useSelector(selectUser);
  const Navigate = useNavigate();

  return (
    <div className='profileScreen'>
      <Nav />
      <div className='profileScreen__body'>
        <h1>Edit Profile</h1>
        <div className='profileScreen__info'>
          <img
            onClick={() => Navigate('/browse')}
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            alt='Avatar'
          />
          <div className='profileScreen__details'>
            <h2>{user.email}</h2>
            <div className='profileScreen__plans'>
              <br />
              <h3>Plans (Free) </h3>
             
              <button onClick={() => auth.signOut()} className='profileScreen__signOut'>
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
