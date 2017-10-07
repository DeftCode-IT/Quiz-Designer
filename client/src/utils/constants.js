export default {
  baseApiUrl: 'http://localhost:3000/api/',
  endpoints: {
    register: 'auth/register',
    login: 'auth/login',
  },
  quizPreviewHeight: 250,
  errorMsg: {
    INVALID_CREDENTIALS: 'Niepoprawne dane do logowania',
    MISSING_CREDENTIALS: 'Pola formularza nie zostały wypełnione',
  },
};
