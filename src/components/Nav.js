import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate} from 'react-router-dom';
import '../styles/Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);
  const Navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className='nav__contents'>
        <img
          onClick={() => Navigate('/')}
          className='nav__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
          alt='Netflix Logo'
        />
        <img
          onClick={() => Navigate('/profile')}
          className='nav__avatar'
          src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
          alt='Profile'
        />
      </div>
    </div>
  );
}

export default Nav;
