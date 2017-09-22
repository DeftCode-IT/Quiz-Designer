import React from 'react';
import PropTypes from 'prop-types';

const statusTexts = {
  published: 'Opublikowany',
  notpublished: 'Nie opublikowany',
  inactive: 'Nieaktywny',
};

const statusColors = {
  published: '#57d500',
  notpublished: '#ffbf00',
  inactive: '#ff2e00',
};

const QuizStatus = props => (
  <span>
    <span style={{ color: statusColors[props.status] }}>&#x25cf;</span> {statusTexts[props.status]}
  </span>
);

export default QuizStatus;

QuizStatus.propTypes = {
  status: PropTypes.string.isRequired,
};
