import React from 'react';
import ReactTable from 'react-table';

function generateData() {
  const dataSet = [];

  for (let i = 0; i < 400; i += 1) {
    dataSet.push({
      name: 'Jakaś nazwa quizu',
      createdAt: '11 Września 2017',
    });
  }

  return dataSet;
}

const data = generateData();

const QuizList = () => (
  <ReactTable
    data={data}
    columns={[
      {
        Header: 'Nazwa',
        accessor: 'name',
      },
      {
        Header: 'Data utworzenia',
        accessor: 'createdAt',
      },
    ]}
    style={{ height: 'calc(100vh - 50px)' }}
    className="-striped -highlight qd-quiz-list"
    defaultPageSize={30}
    previousText="Poprzednie"
    nextText="Następne"
    rowsText="pozycji"
    pageText="Strona"
    ofText="z"
    showPageJump={false}
    showPageSizeOptions={false}
  />
);

export default QuizList;
