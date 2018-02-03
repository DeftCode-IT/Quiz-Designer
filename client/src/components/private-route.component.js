import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ path, component: Component, redirectUrl, canUse, ...rest }) => (
  canUse
    ? <Route path={path} component={Component} {...rest} />
    : <Redirect to={{
      pathname: redirectUrl,
      state: { from: rest.location },
    }}
    />
);

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
  redirectUrl: PropTypes.string.isRequired,
  canUse: PropTypes.bool.isRequired,
};

export default PrivateRoute;
