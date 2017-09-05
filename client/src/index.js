import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import Navbar from './components/navbar';
import LoginBox from './pages/login-box';
import QuizList from './pages/quiz-list';
import './styles/quiz-designer.scss';

function App() {
  return (
    <HashRouter>
      <div>
        <Navbar />
        <Route path="/login" component={LoginBox} />
        <Route path="/list" component={QuizList} />
      </div>
    </HashRouter>
  );
}

ReactDOM.render(<App />, document.querySelector('.app'));
