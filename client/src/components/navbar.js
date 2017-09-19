import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';

const Navbar = () => (
  <Menu className="qd-navbar">
    <Menu.Item>
      <Link to={{ pathname: '/' }}>Quiz designer</Link>
    </Menu.Item>

    <Menu.Menu position="right">
      <Menu.Item>
        <Link to={{ pathname: '/login' }}>Stwórz quiz</Link>
      </Menu.Item>

      <Menu.Item>
        <Link to={{ pathname: '/login' }}>Twoje quizy</Link>
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


const mapStateToProps = state => (Object.assign({}, state));
export default connect(mapStateToProps)(Navbar);
