import React from 'react';
import { Input, Button, Icon } from 'semantic-ui-react';

const LoginBox = () => (
  <div className="qd-login-box">
    <h1 className="qd-login-box__title">Witaj!</h1>

    <Input className="qd-login-box__input" label="Login" placeholder="Twój login..." />
    <Input className="qd-login-box__input" label="Hasło" type="password" placeholder="Twoje hasło..." />

    <div className="qd-login-box__actions qd-actions">
      <Button className="actions__btn" animated>
        <Button.Content visible>Stwórz konto</Button.Content>
        <Button.Content hidden>
          <Icon name="user" />
        </Button.Content>
      </Button>
      <Button className="actions__btn" animated>
        <Button.Content visible>Zaloguj się</Button.Content>
        <Button.Content hidden>
          <Icon name="right arrow" />
        </Button.Content>
      </Button>
    </div>

    <a className="qd-missing-pass-link" href="/">Nie pamiętasz hasła?</a>
  </div>
);

export default LoginBox;
