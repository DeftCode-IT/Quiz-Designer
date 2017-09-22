import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutUser } from '../actions/user.actions';

const Navbar = ({ isUserLoggedIn, logout }) => {
  const AuthBtn = isUserLoggedIn ?
    (
      <Link to={{ pathname: '/login' }} onClick={logout}>
        <Button className="qd-navbar__login-btn" size="mini">
          <Button.Content>Wyloguj</Button.Content>
        </Button>
      </Link>
    ) :
    (
      <Link to={{ pathname: '/login' }}>
        <Button className="qd-navbar__login-btn" size="mini">
          <Button.Content>Logowanie</Button.Content>
        </Button>
      </Link>
    );

  return (
    <Menu className="qd-navbar">
      <Menu.Item>
        <Link to={{ pathname: '/' }}>Quiz designer</Link>
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item>
          {isUserLoggedIn ? <Link to={{ pathname: '/create' }}>Stwórz quiz</Link> : null}
        </Menu.Item>

        <Menu.Item>
          {isUserLoggedIn ? <Link to={{ pathname: '/list' }}>Twoje quizy</Link> : null}
        </Menu.Item>

        <Menu.Item>
          {AuthBtn}
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

Navbar.propTypes = {
  isUserLoggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isUserLoggedIn: state.user.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
