import React from 'react';
import ReactDOM from 'react-dom';

import './styles/quiz-designer.scss';

import { Example } from './components/example';

function App () {
  return <Example text={'Hello World!'} />
}

ReactDOM.render(<App />, document.querySelector('.app'));