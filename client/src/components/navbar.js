import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Button } from 'semantic-ui-react';

const Navbar = () => (
  <Menu className="qd-navbar">
    <Menu.Item>
      <Link to={{ pathname: '/' }}>Quiz designer</Link>
    </Menu.Item>

    <Menu.Menu position="right">
      <Menu.Item>
        <Link to={{ pathname: '/create' }}>Stwórz quiz</Link>
      </Menu.Item>

      <Menu.Item>
        <Link to={{ pathname: '/list' }}>Twoje quizy</Link>
      </Menu.Item>

      <Menu.Item>
        <Link to={{ pathname: '/login' }}>
          <Button className="qd-navbar__login-btn" size="mini">
            <Button.Content>Logowanie</Button.Content>
          </Button>
        </Link>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default Navbar;
