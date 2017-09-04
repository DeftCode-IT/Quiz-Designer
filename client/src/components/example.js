import React from 'react';
import PropTypes from 'prop-types';

const Example = props => <h1>{props.text}</h1>;

Example.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Example;
