import React from 'react';
import { Input, Button, Icon } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import { registerUser } from '../utils/auth';


class RegisterBox extends React.Component {
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

  onKeyUp(e) {
    if (e.keyCode === 13) {
      this.onSubmitForm();
    }
  }

  onSubmitForm() {
    const { email, password, repeatedPassword } = this.state;
    if (password === repeatedPassword) {
      registerUser(email, password)
        .then(() => {
          this.props.history.push('/login');
        });
      // .catch(error => console.log(error)); // uncomment only for debugging
    }
  }

  render() {
    return (
      <div className="qd-register-box">
        <h1 className="qd-register-box__title">Zarejestruj się</h1>
        <Input className="qd-register-box__input" label="E-mail" value={this.state.email} onKeyUp={e => this.onKeyUp(e)} onChange={e => this.onChangeInput(e, 'email')} placeholder="Twój email..." />
        <Input className="qd-register-box__input" label="Hasło" value={this.state.password} onKeyUp={e => this.onKeyUp(e)} onChange={e => this.onChangeInput(e, 'password')} type="password" placeholder="Twoje hasło..." />
        <Input
          className="qd-register-box__input"
          label="Powtórz hasło"
          value={this.state.repeatPassword}
          onKeyUp={e => this.onKeyUp(e)}
          onChange={e => this.onChangeInput(e, 'repeatedPassword')}
          type="password"
          placeholder="Powtórz hasło..."
        />
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


RegisterBox.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default withRouter(RegisterBox);
