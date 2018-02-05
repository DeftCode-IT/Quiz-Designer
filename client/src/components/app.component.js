import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PrivateRoute from './private-route.component';
import Navbar from './navbar.component';
import LoginPage from '../pages/login-page.component';
import RegisterPage from '../pages/register-page.component';
import QuizListPage from '../pages/quiz-list-page.component';

const App = ({ isAuthenticated }) => (
  <HashRouter>
    <div>
      <Navbar />
      <main className="qd-main-container">
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              if (isAuthenticated) {
                return <Redirect from="/" to="/list" />;
              }
              return <Redirect from="/" to="/login" />;
            }}
          />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <PrivateRoute
            path="/list"
            component={QuizListPage}
            redirectUrl="/login"
            canUse={isAuthenticated}
          />
        </Switch>
      </main>
    </div>
  </HashRouter>
);

const mapStateToProps = state => ({
  isAuthenticated: state.user.isLoggedIn,
});

export default connect(mapStateToProps)(App);
