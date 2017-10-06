const chai = require('chai');
const request = require('supertest');
const app = require('./../src/index');
const helpers = require('./helpers');
chai.should();

describe('Authorization and authentication', () => {
  describe('Testing /login endpoint', () => {
    it('should login and get token in response', done => {
      request(app)
      .post('/api/auth/login')
      .send({
        email: helpers.constants.user1.email,
        password: helpers.constants.user1.password
      })
      .expect(res => {
        res.body.should.have.property('data');
        res.body.data.should.have.property('token');
        res.body.data.token.should.be.a('string');
      })
      .expect(200)
      .end(done);
    });

    it('should send info about wrong credentials', done => {
      request(app)
      .post('/api/auth/login')
      .send({
        email: 'wrongmail@example.com',
        password: 'wrongpassword'
      })
      .expect(res => {
        res.body.name.should.be.equal('INVALID_CREDENTIALS');
        res.body.message.should.be.equal('Invalid email or/and password');
        res.body.code.should.be.equal(401);
      })
      .expect(401)
      .end(done);
    });

    it('should send info about missing credentials', done => {
      request(app)
      .post('/api/auth/login')
      .send({
        email: 'wrongmail@example.com'
      })
      .expect(res => {
        res.body.name.should.be.equal('MISSING_CREDENTIALS');
        res.body.message.should.be.equal('Missing email or/and password');
        res.body.code.should.be.equal(401);
      })
      .expect(401)
      .end(done);
    });
  });

  describe('Testing /auth endpoint', () => {
    it('should register user', done => {
      request(app)
      .post('/api/auth/register')
      .send({
        email: 'example3@example.com',
        password: 'examplepassword2'
      })
      .expect(res => {
        res.body.should.have.property('data');
        res.body.data.should.have.property('email');
        res.body.data.email.should.be.a('string');
      })
      .expect(200) // zmienić to potem na 201 chyba
      .end(done);
    });

    it('should inform about existing user', done => {
      request(app)
      .post('/api/auth/register')
      .send({
        email: 'example@example.com',
        password: 'examplepassword'
      })
      .expect(res => {
        res.body.name.should.be.equal('USER_EXISTS');
        res.body.message.should.be.equal('The user already exists');
        res.body.code.should.be.equal(500); // zmienić to potem na odpowiednie
      })
      .expect(500) // zmienić to potem na odpowiednie
      .end(done);
    });
  });
});