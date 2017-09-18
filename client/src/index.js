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

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: false,
    };

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login(token) {
    this.setState({ isLogged: true });
    localStorage.setItem('token', token);
  }

  logout() {
    this.setState({ isLogged: false });
    localStorage.removeItem('token');
  }

  render() {
    return (
      <HashRouter>
        <div>
          <Navbar isLogged={this.state.isLogged} logout={this.logout} />
          <main className="qd-main-container">
            <Route path="/login" render={() => <LoginPage login={this.login} />} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/list" component={QuizListPage} />
            <Route render={() => {
              if (this.state.isLogged) {
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
}

ReactDOM.render(<App />, document.querySelector('.app'));
