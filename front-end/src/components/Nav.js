import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import App from '../App';
// import User from '../../../backend/db/User';

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <nav>
    <div>
        <img alt="logo"
        className = 'logo' 
        src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUuwRoePY4olE4WqrCiDvBsq46fdGgrlq50w&usqp=CAU' />
      {auth ? (
        <ul className="nav-links">
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/add">Add Products</Link>
          </li>
          <li>
            <Link to="/update">Update Products</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link onClick={logout} to="/signup">
              Logout
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-links">
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </div>
    </nav>
  );
};

export default Nav;
