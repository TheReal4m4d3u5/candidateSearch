import React from 'react';
import { NavLink } from 'react-router-dom'; // react-router-dom for routing




const Nav: React.FC = () => {

  const navItems = [
    { name: 'Search', path: '/search' },
    { name: 'Saved Candidates', path: '/saved' },
  ];

  return (
    <nav className="nav">
      <ul>
        {navItems.map(item => (
          <li key={item.name} className="nav-item">
            <NavLink
              to={item.path}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Nav;
