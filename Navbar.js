import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  return (
    <nav>
      <h1> User Data </h1>
      <ul>
        <Link to='/Home'> Home </Link>
        <Link to='/User'> Users </Link>
        <Link to='/Contact'> Contacts </Link>
      </ul>
    </nav>
  )
}

export default Navbar
