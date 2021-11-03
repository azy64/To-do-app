import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/nav.css';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink activeClassName="active" to="/">Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}
