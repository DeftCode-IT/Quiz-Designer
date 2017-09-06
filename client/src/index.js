import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import Navbar from './components/navbar';
import LoginPage from './pages/login-page';
import QuizList from './pages/quiz-list';
import './styles/quiz-designer.scss';

function App() {
  return (
    <HashRouter>
      <div>
        <Navbar />
        <main className="qd-main-container">
          <Route path="/login" component={LoginPage} />
          <Route path="/list" component={QuizList} />
        </main>
      </div>
    </HashRouter>
  );
}

ReactDOM.render(<App />, document.querySelector('.app'));
