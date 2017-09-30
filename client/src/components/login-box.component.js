import React from 'react';
import { connect } from 'react-redux';
import { Input, Button, Icon } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { loginUser } from '../actions/user.actions';
import constanst from '../utils/constants';

class LoginBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isStart: false,
      isError: false,
      errorMsg: '',
    };

    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onChangeInput(e, inputName) {
    const value = e.target.value;
    this.setState({ [inputName]: value });
  }


  onSubmitForm(event) {
    event.preventDefault();
    const { email, password } = this.state;
    this.setState({ isStart: true });
    this.props.login(email, password)
      .then(() => {
        this.setState({ isStart: false });
        this.props.history.push('/list');
      })
      .catch(error => {
        const { errorMsg } = constanst;
        const errorName = error.response.data.name;
        this.setState({ isError: true, isStart: false, errorMsg: errorMsg[errorName] });
      });
  }

  render() {
    return (
      <div className="qd-login-box">
        <form onSubmit={e => this.onSubmitForm(e)}>
          <h1 className="qd-login-box__title">Witaj!</h1>
          <Input className="qd-login-box__input" label="Login" value={this.state.email} onChange={e => this.onChangeInput(e, 'email')} placeholder="Twój login..." />
          <Input className="qd-login-box__input" label="Hasło" value={this.state.password} onChange={e => this.onChangeInput(e, 'password')} type="password" placeholder="Twoje hasło..." />
          {this.state.isError ?
            <div className="qd-login-box__error">
              { this.state.errorMsg }
            </div>
            : null}
          <div className="qd-login-box__actions qd-actions">
            <Link to="/register">
              <Button className="actions__btn" type="button" animated>
                <Button.Content visible>Stwórz konto</Button.Content>
                <Button.Content hidden>
                  <Icon name="user" />
                </Button.Content>
              </Button>
            </Link>
            {this.state.isStart ?
              <Button className="actions__btn" type="submit" animated>
                <img className="actions__loader" src="src/images/loader.svg" alt="" />
              </Button>
              :
              <Button className="actions__btn" type="submit" animated>
                <Button.Content visible>Zaloguj się</Button.Content>
                <Button.Content hidden>
                  <Icon name="right arrow" />
                </Button.Content>
              </Button> }

          </div>
        </form>
        <a className="qd-missing-pass-link" href="/">Nie pamiętasz hasła?</a>
      </div>
    );
  }
}

LoginBox.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  login: PropTypes.func.isRequired,
};


const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(loginUser(email, password)),
});

export default connect(null, mapDispatchToProps)(withRouter(LoginBox));
