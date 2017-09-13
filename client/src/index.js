import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import 'react-table/react-table.css';

import Navbar from './components/navbar';
import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page';
import QuizListPage from './pages/quiz-list-page';
import './styles/quiz-designer.scss';
import { checkAuth } from './utils/auth';

function App() {
  return (
    <HashRouter>
      <div>
        <Navbar />
        <main className="qd-main-container">
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/list" component={QuizListPage} />
          <Route render={() => {
            if (checkAuth()) {
              return <Redirect to="/list" />;
            }

            return <Redirect to="/login" />;
          }
          }
          />
        </main>
      </div>
    </HashRouter>
  );
}

ReactDOM.render(<App />, document.querySelector('.app'));
