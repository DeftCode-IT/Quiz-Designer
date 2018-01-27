import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isAuthenticated } from '../utils/auth';

const PrivateRoute = props => {
  const { path, component: Component, redirectUrl } = props;
  const shouldRender = isAuthenticated();

  return (
    shouldRender
      ? <Route path={path} component={Component} />
      : <Redirect to={{
        pathname: redirectUrl,
        state: { from: props.location },
      }}
      />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  redirectUrl: PropTypes.string.isRequired,
};

export default PrivateRoute;
