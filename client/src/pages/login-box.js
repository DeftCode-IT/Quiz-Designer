import React from 'react';
import { Input } from 'semantic-ui-react';

const LoginBox = () => (
  <div>
    <Input label="Login" placeholder="Twój login..." />
    <Input label="Hasło" type="password" placeholder="Twoje hasło..." />
  </div>
);

export default LoginBox;
