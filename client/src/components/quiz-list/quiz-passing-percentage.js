import React from 'react';
import PropTypes from 'prop-types';

const percentagesColors = {
  high: '#57d500',
  medium: '#ffbf00',
  low: '#ff2e00',
};

function getPercentageColor(percentage) {
  if (percentage > 70) return percentagesColors.high;
  if (percentage < 70 && percentage > 40) return percentagesColors.medium;
  return percentagesColors.low;
}

const QuizPassingPercentage = props => (
  <div
    style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#dadada',
      borderRadius: '2px',
    }}
  >
    <div
      style={{
        width: `${props.percentage}%`,
        height: '100%',
        backgroundColor: getPercentageColor(props.percentage),
        borderRadius: '2px',
      }}
    />
  </div>
);

export default QuizPassingPercentage;

QuizPassingPercentage.propTypes = {
  percentage: PropTypes.number.isRequired,
};
