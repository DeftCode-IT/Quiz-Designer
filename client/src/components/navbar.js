import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Navbar = () => (
  <Menu>
    <Menu.Menu position="right">
      <Menu.Item name="signup">
        <Link to={{ pathname: '/login' }}>Login Box</Link>
      </Menu.Item>

      <Menu.Item name="help">
        <Link to={{ pathname: '/list' }}>Quiz List</Link>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default Navbar;
