
const constants = {
  baseApiUrl: 'http://localhost:3000/api/',
  endpoints: {
    register: 'auth/register',
    login: 'auth/login',
  },
  errorMsg: {
    INVALID_CREDENTIALS: 'Niepoprawne dane do logowania',
    MISSING_CREDENTIALS: 'Pola formularza nie zostały wypełnione',
  },
};

export default constants;
