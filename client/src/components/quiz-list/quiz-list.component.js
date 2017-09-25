import React from 'react';
import ReactTable from 'react-table';
import { connect } from 'react-redux';

import { openQuizPreview } from '../../actions/quiz-list.actions';
import QuizStatus from './quiz-status.component';
import QuizPassingPercentage from './quiz-passing-percentage.component';
import constants from './../../utils/constants';

function generateData() {
  const dataSet = [];

  for (let i = 0; i < 100; i += 1) {
    dataSet.push({
      name: 'Państwa i miasta europy',
      description: 'Quzi na temat państw i miast europy. Zabytki, miejsca itd.',
      createdAt: '11 Wrzesień 2017',
      status: 'published',
      questionsCount: 24,
      filledQuizesCount: 67,
      passedQuizesPercentage: 87,
      recentlyFilledQuizzes: [14, 7, 6, 5, 4, 7, 12],
    });

    dataSet.push({
      name: 'Świat gier video',
      description: 'Quiz na temam gier video. Sprawdź swoją wiedzą na temat gier, postaci oraz fabuł.',
      createdAt: '11 Wrzesień 2017',
      status: 'notpublished',
      questionsCount: 0,
      filledQuizesCount: 0,
      passedQuizesPercentage: 0,
      recentlyFilledQuizzes: [14, 7, 6, 5, 4, 7, 12],
    });

    dataSet.push({
      name: 'Jeszcze jakiś inny quiz, bo mogę',
      description: 'Bla bla bladu bidah bla, kolejny opis quizu.',
      createdAt: '11 Wrzesień 2017',
      status: 'published',
      questionsCount: 32,
      filledQuizesCount: 47,
      passedQuizesPercentage: 56,
      recentlyFilledQuizzes: [14, 7, 6, 5, 4, 7, 12],
    });

    dataSet.push({
      name: 'Jakaś tam inny quiz, nie mam pomysłu',
      description: 'Bla bla bla kolejny opis, kolejny brak pomysłu',
      createdAt: '11 Wrzesień 2017',
      status: 'inactive',
      questionsCount: 34,
      filledQuizesCount: 17,
      passedQuizesPercentage: 12,
      recentlyFilledQuizzes: [14, 7, 6, 5, 4, 7, 12],
    });
  }

  return dataSet;
}

const data = generateData();

const QuizList = props => {
  const heightAdjustment = props.selectedQuiz ? constants.quizPreviewHeight + 50 : 50;

  return (<ReactTable
    data={data}
    columns={[
      {
        Header: 'Nazwa',
        accessor: 'name',
        maxWidth: 350,
      },
      {
        Header: 'Opis',
        accessor: 'description',
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
    style={{ height: `calc(100vh - ${heightAdjustment}px)` }}
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
        props.selectQuiz(rowInfo.original);
      },
    })
    }
  />);
};

const mapStateToProps = state => ({
  selectedQuiz: state.previewSelectedQuiz,
});

const mapDispatchToProps = dispatch => ({
  selectQuiz: quiz => dispatch(openQuizPreview(quiz)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizList);
