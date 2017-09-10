import React from 'react';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';

import QuizStatus from './quiz-status';
import QuizPassingPercentage from './quiz-passing-percentage';

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
    });

    dataSet.push({
      name: 'Świat gier video',
      description: 'Quiz na temam gier video. Sprawdź swoją wiedzą na temat gier, postaci oraz fabuł.',
      createdAt: '11 Wrzesień 2017',
      status: 'notpublished',
      questionsCount: 0,
      filledQuizesCount: 0,
      passedQuizesPercentage: 0,
    });

    dataSet.push({
      name: 'Jeszcze jakiś inny quiz, bo mogę',
      description: 'Bla bla bladu bidah bla, kolejny opis quizu.',
      createdAt: '11 Wrzesień 2017',
      status: 'published',
      questionsCount: 32,
      filledQuizesCount: 47,
      passedQuizesPercentage: 56,
    });

    dataSet.push({
      name: 'Jakaś tam inny quiz, nie mam pomysłu',
      description: 'Bla bla bla kolejny opis, kolejny brak pomysłu',
      createdAt: '11 Wrzesień 2017',
      status: 'inactive',
      questionsCount: 34,
      filledQuizesCount: 17,
      passedQuizesPercentage: 12,
    });
  }

  return dataSet;
}

const data = generateData();

const QuizList = props => (
  <ReactTable
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
        style: { 'text-align': 'center' },
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
        style: { 'text-align': 'center' },
      },
      {
        Header: 'Liczba wypełnień',
        accessor: 'filledQuizesCount',
        maxWidth: 150,
        style: { 'text-align': 'center' },
      },
      {
        Header: 'Procent zaliczeń',
        accessor: 'passedQuizesPercentage',
        maxWidth: 150,
        style: { 'text-align': 'center' },
        Cell: row => <QuizPassingPercentage percentage={row.value} />,
      },
    ]}
    style={{ height: `calc(${props.height}vh - 50px)` }}
    className="-striped"
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
  />
);

QuizList.propTypes = {
  height: PropTypes.number,
};

QuizList.defaultProps = {
  height: 100,
};

export default QuizList;
