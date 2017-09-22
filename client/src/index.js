import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import 'semantic-ui-css/semantic.min.css';
import 'react-table/react-table.css';

import Navbar from './components/navbar.component';
import LoginPage from './pages/login-page.component';
import RegisterPage from './pages/register-page.component';
import QuizListPage from './pages/quiz-list-page.component';
import rootReducer from './reducers/';
import PrivateRoute from './components/private-route.component';
import './styles/quiz-designer.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(reduxThunk),
));

const App = () => (
  <HashRouter>
    <div>
      <Navbar />
      <main className="qd-main-container">
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <PrivateRoute path="/list" component={QuizListPage} />
      </main>
    </div>
  </HashRouter>
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
