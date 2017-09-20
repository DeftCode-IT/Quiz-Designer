import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutUser } from '../actions//user';

const Navbar = props => (
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
        <Link
          to={{ pathname: '/login' }}
          onClick={() => {
            if (props.isLoggedIn) {
              props.logout();
            }
          }
          }
        >

          <Button className="qd-navbar__login-btn" size="mini">
            <Button.Content>{ props.isLoggedIn ? 'Wyloguj' : 'Logowanie' }</Button.Content>
          </Button>
        </Link>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

Navbar.propTypes = {
  isLoggedIn: PropTypes.bool,
  logout: PropTypes.func,
};

Navbar.defaultProps = {
  isLoggedIn: false,
  logout: () => {},
};


const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
