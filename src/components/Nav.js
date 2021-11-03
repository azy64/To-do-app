import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/nav.css';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">Home</NavLink>
        </li>
        <li>
          <NavLink exact to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}
