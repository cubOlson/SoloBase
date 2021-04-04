// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

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
        <NavLink to="/login" className="link">Log In</NavLink>
        <NavLink to="/signup" className="link">Sign Up</NavLink>
      </>
    );
  }

  return (
    <ul className="nav_parent">
      <li className="nav">
        <NavLink exact to="/" className="link">Home</NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;