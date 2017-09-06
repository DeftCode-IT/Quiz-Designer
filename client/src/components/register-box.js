import React from 'react';
import { Input, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const LoginBox = () => (
  <div className="qd-register-box">
    <h1 className="qd-register-box__title">Witaj!</h1>

    <Input className="qd-register-box__input" label="E-mail" placeholder="Twój email..." />
    <Input className="qd-register-box__input" label="Hasło" type="password" placeholder="Twoje hasło..." />
    <Input className="qd-register-box__input" label="Powtórz hasło" type="password" placeholder="Powtórz hasło..." />


    <div className="qd-register-box__actions qd-actions">
      <Link to={{ pathname: '/login' }}>
        <Button className="actions__btn" animated>
          <Button.Content visible>Zaloguj się</Button.Content>
          <Button.Content hidden>
            <Icon name="right arrow" />
          </Button.Content>
        </Button>
      </Link>
      
      <Button className="actions__btn" animated>
        <Button.Content visible>Stwórz konto</Button.Content>
        <Button.Content hidden>
          <Icon name="user" />
        </Button.Content>
      </Button>
    </div>

  </div>
);

export default LoginBox;
