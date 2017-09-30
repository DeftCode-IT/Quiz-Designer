
const constants = {
  baseApiUrl: 'http://localhost:3000/api/',
  endpoints: {
    register: 'auth/register',
    login: 'auth/login',
  },
  errorMsg: {
    INVALID_CREDENTIALS: 'Niepoprawne dane do logowanie',
    MISSING_CREDENTIALS: 'Pole formularza nie zostały wypełnione',
  },
};

export default constants;
