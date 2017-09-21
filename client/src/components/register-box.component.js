import React from 'react';
import { Input, Button, Icon } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../actions/user.actions';


class RegisterBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      repeatedPassword: '',
    };

    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onChangeInput(e, inputName) {
    const value = e.target.value;
    this.setState({ [inputName]: value });
  }


  onSubmitForm(event) {
    event.preventDefault();
    const { email, password, repeatedPassword } = this.state;
    if (password === repeatedPassword) {
      this.props.register(email, password).then(() => {
        this.props.history.push('/login');
      });
      // .catch(error => console.log(error)); // uncomment only for debugging
    }
  }

  render() {
    return (
      <div className="qd-register-box">
        <form onSubmit={e => this.onSubmitForm(e)}>
          <h1 className="qd-register-box__title">Zarejestruj się</h1>
          <Input className="qd-register-box__input" label="E-mail" value={this.state.email} onChange={e => this.onChangeInput(e, 'email')} placeholder="Twój email..." />
          <Input className="qd-register-box__input" label="Hasło" value={this.state.password} onChange={e => this.onChangeInput(e, 'password')} type="password" placeholder="Twoje hasło..." />
          <Input
            className="qd-register-box__input"
            label="Powtórz hasło"
            value={this.state.repeatPassword}
            onChange={e => this.onChangeInput(e, 'repeatedPassword')}
            type="password"
            placeholder="Powtórz hasło..."
          />
          <div className="qd-register-box__actions qd-actions">
            <Link to="/login">
              <Button className="actions__btn" type="button" animated>
                <Button.Content visible>Zaloguj się</Button.Content>
                <Button.Content hidden>
                  <Icon name="right arrow" />
                </Button.Content>
              </Button>
            </Link>
            <Button className="actions__btn" type="submit" animated>
              <Button.Content visible>Stwórz konto</Button.Content>
              <Button.Content hidden>
                <Icon name="user" />
              </Button.Content>
            </Button>
          </div>
        </form>
      </div>
    );
  }
}


RegisterBox.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  register: PropTypes.func.isRequired,
};


const mapDispatchToProps = dispatch => ({
  register: (email, password) => dispatch(registerUser(email, password)),
});

export default connect(null, mapDispatchToProps)(withRouter(RegisterBox));
