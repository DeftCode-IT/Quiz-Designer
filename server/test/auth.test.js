process.env.NODE_ENV = 'test';

const chai = require('chai');
const request = require('supertest');
const app = require('./../src/index');
chai.should();

describe('Authorization and authentication', () => {
  describe('Testing /register endpoint', () => {

  });

  describe('Testing /login endpoint', () => {
    it('should login and get token in response', (done) => {
      request(app)
      .post('/api/auth/login')
      .send({
        email: 'example@example.com',
        password: 'examplepassword'
      })
      .expect(res => {
        res.body.should.have.property('data');
        res.body.data.should.have.property('token');
        res.body.data.token.should.be.a('string');
      })
      .expect(200)
      .end(done);
    });

    it('should get info about wrong credentials', (done) => {
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

    it('should get info about missing credentials', (done) => {
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
});