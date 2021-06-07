// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

import { showModal, setCurrentModal } from '../../store/modal'
import LoginFormPage from '../LoginFormPage/index'
import SignUpFormPage from '../SignupFormPage/index'

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  const dispatch = useDispatch();

  const showLogin = () => {
    dispatch(setCurrentModal(LoginFormPage))
    dispatch(showModal())
  }

  const showSignup = () => {
    dispatch(setCurrentModal(SignUpFormPage))
    dispatch(showModal())
  }



  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink to='/userPage' className="link">My Stuff</NavLink>
        <ProfileButton user={sessionUser} className="link"/>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <button onClick={showLogin}>Log In</button>
        <button onClick={showSignup}>Sign Up</button>
      </>
    );
  }

  return (
      <div className="nav_parent">
        <div className="nav">
          <NavLink exact to="/" className="link">Home</NavLink>
          {isLoaded && sessionLinks}
        </div>
      </div>
  );
}

export default Navigation;