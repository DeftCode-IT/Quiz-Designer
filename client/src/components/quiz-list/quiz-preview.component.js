import React from 'react';
import { connect } from 'react-redux';
import { closeQuizPreview } from './../../actions/quiz-list.actions';
import constants from './../../utils/constants';

const QuizPreview = props => (
  <div style={{ height: props.selectedQuiz ? constants.quizPreviewHeight : 0 }} className="qd-quiz-preview">
    <h1>Test</h1>
    <button onClick={props.closePreview}>Close</button>
  </div>
);

const mapStateToProps = state => ({
  selectedQuiz: state.previewSelectedQuiz,
});

const mapDispatchToProps = dispatch => ({
  closePreview: () => dispatch(closeQuizPreview()),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizPreview);
