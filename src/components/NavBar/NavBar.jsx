import React from 'react';
import "./NavBar.css";
import { NavLink } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';

export default function NavBar(props) {

  function handleLogOut() {
    usersService.logOut();
    props.setUser(null);
  }

  return (
    <div className="flex-container">
      <NavLink className="flex-item" to="/">
        <button className="btn fourth">Home</button>
      </NavLink>
      <NavLink className="flex-item" to="/services">
        <button className="btn fourth">View Services</button>
      </NavLink>
      <NavLink className="flex-item" to="/reviews">
        <button className="btn fourth">Reviews</button>
      </NavLink>
      <NavLink className="flex-item" to="/booking">
        <button className="btn fourth">Bookings</button>
      </NavLink>
      <NavLink className="flex-item" to=""><button className="btn fourth" onClick={handleLogOut}>Log Out</button></NavLink>
      </div>
  );
}