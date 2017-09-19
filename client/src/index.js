import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'semantic-ui-css/semantic.min.css';
import 'react-table/react-table.css';

import Navbar from './components/navbar';
import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page';
import QuizListPage from './pages/quiz-list-page';
import rootReducer from './reducers/';
import './styles/quiz-designer.scss';


const store = createStore(rootReducer);

const App = () => (
  <HashRouter>
    <div>
      <Navbar />
      <main className="qd-main-container">
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/list" component={QuizListPage} />
      </main>
    </div>
  </HashRouter>
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.querySelector('.app'));
