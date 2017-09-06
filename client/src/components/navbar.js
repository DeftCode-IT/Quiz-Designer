import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Navbar = () => (
  <Menu className="qd-navbar">
    <Menu.Item>
      <Link to={{ pathname: '/' }}>Quiz designer</Link>
    </Menu.Item>

    <Menu.Menu position="right">
      <Menu.Item>
        <Link to={{ pathname: '/list' }}>Twoje quizy</Link>
      </Menu.Item>

      <Menu.Item>
        <Link to={{ pathname: '/login' }}>Zaloguj się</Link>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default Navbar;
