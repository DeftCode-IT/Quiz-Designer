import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Navbar = ({ isLogged, logout }) => {
  let LoginButton = null;
  if (isLogged) {
    LoginButton = () => (
      <Link to={{ pathname: '/login' }} onClick={() => logout()}>
        <Button className="qd-navbar__login-btn" size="mini">
          <Button.Content>Wyloguj</Button.Content>
        </Button>
      </Link>
    );
  } else {
    LoginButton = () => (
      <Link to={{ pathname: '/login' }}>
        <Button className="qd-navbar__login-btn" size="mini">
          <Button.Content>Logowanie</Button.Content>
        </Button>
      </Link>
    );
  }
  return (
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
          <LoginButton />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

Navbar.propTypes = {
  isLogged: PropTypes.bool,
  logout: PropTypes.func,
};

Navbar.defaultProps = {
  isLogged: false,
  logout: () => {},
};

export default Navbar;
