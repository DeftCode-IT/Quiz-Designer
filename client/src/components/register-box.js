import React from 'react';
import { Input, Button, Icon } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';
import { registerUser } from '../utils/auth';


class LoginBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      repeatedPassword: '',
    };
  }

  onChangeInput(e, inputName) {
    const value = e.target.value;
    this.setState({ [inputName]: value });
  }

  onSubmitForm() {
    const { email, password, repeatedPassword } = this.state;
    if (password === repeatedPassword) {
      registerUser(email, password)
        .then(() => <Redirect to="/login" />)
        .catch(error => console.log(error));
    }
  }

  render() {
    return (
      <div className="qd-register-box">
        <h1 className="qd-register-box__title">Zarejestruj się</h1>
        <Input className="qd-register-box__input" label="E-mail" value={this.state.email} onChange={e => this.onChangeInput(e, 'email')} placeholder="Twój email..." />
        <Input className="qd-register-box__input" label="Hasło" value={this.state.password} onChange={e => this.onChangeInput(e, 'password')} type="password" placeholder="Twoje hasło..." />
        <Input className="qd-register-box__input" label="Powtórz hasło" value={this.state.repeatPassword} onChange={e => this.onChangeInput(e, 'repeatedPassword')} type="password" placeholder="Powtórz hasło..." />
        <div className="qd-register-box__actions qd-actions">
          <Link to="/login">
            <Button className="actions__btn" animated>
              <Button.Content visible>Zaloguj się</Button.Content>
              <Button.Content hidden>
                <Icon name="right arrow" />
              </Button.Content>
            </Button>
          </Link>
          <Button className="actions__btn" onClick={() => this.onSubmitForm()} animated>
            <Button.Content visible>Stwórz konto</Button.Content>
            <Button.Content hidden>
              <Icon name="user" />
            </Button.Content>
          </Button>
        </div>
      </div>
    );
  }
}


export default LoginBox;
