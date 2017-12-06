import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = props => {
  const condition = props.if;
  const Component = props.component;
  const redirect = props.redirect;

  return (
    condition
      ? <Route path={props.path} component={Component} />
      : <Redirect to={redirect} />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  if: PropTypes.bool.isRequired,
  redirect: PropTypes.string.isRequired,
};

export default PrivateRoute;
