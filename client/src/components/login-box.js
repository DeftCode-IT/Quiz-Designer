import React from 'react';
import { Input, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class LoginBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
    };

    this.onChange = this.onchangeInput.bind(this);
  }

  onchangeInput(e, inputName) {
    const value = e.target.value;
    this.setState({ [inputName]: value });
  }

  onSubmitForm() {
    const { login, password } = this.state;
    axios.post('http://localhost:3000/api/auth/login', {
      email: login,
      password,
    })
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="qd-login-box">
        <h1 className="qd-login-box__title">Witaj!</h1>
        <Input className="qd-login-box__input" label="Login" value={this.state.login} onChange={e => this.onchangeInput(e, 'login')} placeholder="Twój login..." />
        <Input className="qd-login-box__input" label="Hasło" value={this.state.password} onChange={e => this.onchangeInput(e, 'password')} type="password" placeholder="Twoje hasło..." />
        <div className="qd-login-box__actions qd-actions">
          <Link to="/register">
            <Button className="actions__btn" animated>
              <Button.Content visible>Stwórz konto</Button.Content>
              <Button.Content hidden>
                <Icon name="user" />
              </Button.Content>
            </Button>
          </Link>
          <Button className="actions__btn" onClick={() => this.onSubmitForm()} animated>
            <Button.Content visible>Zaloguj się</Button.Content>
            <Button.Content hidden>
              <Icon name="right arrow" />
            </Button.Content>
          </Button>
        </div>
        <a className="qd-missing-pass-link" href="/">Nie pamiętasz hasła?</a>
      </div>
    );
  }
}

export default LoginBox;
