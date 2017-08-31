module.exports = {
  http: {
    port: process.env.PORT || 3000,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'u8qmYXol2sxzDfTr',
    signOptions: {
      expiresIn: 60 * 60 * 24 * 7,
    },
  },
};
