const constants = {
  token: null
};

const createUser = (config = {}) => {
  return Object.assign({
    email: 'example@example.com',
    password: '$2a$10$1Dih.A4T/LsoFnqyYHo93u25Wkv67wKHTr8sDANrh9c2BiJR8ZjF6'
  }, config);
};

module.exports = {
  constants,
  createUser
};