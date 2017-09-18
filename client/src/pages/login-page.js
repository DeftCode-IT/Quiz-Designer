import React from 'react';
import PropTypes from 'prop-types';
import LoginBox from './../components/login-box';

const LoginPage = ({ login }) => (
  <div className="qd-login-page">
    <LoginBox login={login} />
  </div>
);

LoginPage.propTypes = {
  login: PropTypes.func,
};

LoginPage.defaultProps = {
  login: () => {},
};

export default LoginPage;
