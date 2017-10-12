import React from 'react';
import ReactTable from 'react-table';
import { connect } from 'react-redux';

import { openQuizPreview, getQuizzesList } from '../../actions/quiz-list.actions';
import QuizStatus from './quiz-status.component';
import QuizPassingPercentage from './quiz-passing-percentage.component';
import constants from './../../utils/constants';
import { formatDate, calculatePercentage } from '../../utils/quiz-list';

class QuizList extends React.Component {
  constructor(props) {
    super(props);
    this.heightAdjustment = this.props.selectedQuiz ? constants.quizPreviewHeight + 50 : 50;
  }

  componentDidMount() {
    this.props.getQuizzes();
  }


  changeQuizArray() {
    return this.props.quizzes.map(quiz => {
      console.log(quiz.results);
      const currentQuiz = quiz;
      const questionsCount = currentQuiz.questions.length;
      const filledQuizesCount = currentQuiz.results.length;
      const date = new Date(currentQuiz.createdDate);
      currentQuiz.createdAt = formatDate(date);
      currentQuiz.questionsCount = questionsCount;
      currentQuiz.filledQuizesCount = filledQuizesCount;
      currentQuiz.passedQuizesPercentage = calculatePercentage(quiz);
      return currentQuiz;
    });
  }

  render() {
    if (!this.props.quizzes) {
      return null;
    }
    return (
      <ReactTable
        data={this.changeQuizArray()}
        columns={[
          {
            Header: 'Nazwa',
            accessor: 'title',
            maxWidth: 350,
          },
          {
            Header: 'Opis',
            accessor: 'description',
          },
          {
            Header: 'Wersja',
            accessor: 'version',
            maxWidth: 150,
            style: { textAlign: 'center' },
          },
          {
            Header: 'Data utworzenia',
            accessor: 'createdAt',
            maxWidth: 200,
            style: { textAlign: 'center' },
          },
          {
            Header: 'Status',
            accessor: 'status',
            Cell: row => <QuizStatus status={row.value} />,
            maxWidth: 150,
          },
          {
            Header: 'Liczba pytań',
            accessor: 'questionsCount',
            maxWidth: 150,
            style: { textAlign: 'center' },
          },
          {
            Header: 'Liczba wypełnień',
            accessor: 'filledQuizesCount',
            maxWidth: 150,
            style: { textAlign: 'center' },
          },
          {
            Header: 'Procent zaliczeń',
            accessor: 'passedQuizesPercentage',
            maxWidth: 150,
            style: { textAlign: 'center' },
            Cell: row => <QuizPassingPercentage percentage={row.value} />,
          },
        ]}
        style={{ height: `calc(100vh - ${this.heightAdjustment}px)` }}
        className="-striped -highlight"
        defaultPageSize={30}
        previousText="Poprzednie"
        nextText="Następne"
        rowsText="pozycji"
        pageText="Strona"
        ofText="z"
        showPageJump={false}
        showPageSizeOptions={false}
        resizable={false}
        sortable={false}
        getTrProps={(state, rowInfo) => ({
          onClick: () => {
            this.props.selectQuiz(rowInfo.original);
          },
        })
        }
      />
    );
  }
}


const mapStateToProps = state => ({
  selectedQuiz: state.previewSelectedQuiz,
  quizzes: state.quizzes,
});

const mapDispatchToProps = dispatch => ({
  selectQuiz: quiz => dispatch(openQuizPreview(quiz)),
  getQuizzes: () => dispatch(getQuizzesList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizList);
