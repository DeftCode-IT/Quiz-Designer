const chai = require('chai');
const request = require('supertest');
const app = require('./../src/index');
const helpers = require('./helpers');
chai.should();

describe('Quizzes', () => {
  describe('Testing /quizzes endpoint', () => {
    describe('Adding quiz', () => {
      it('should add single quiz', done => {
        request(app)
          .post('/api/quizes')
          .set('Authorization', helpers.constants.token)
          .send(helpers.createQuiz())
          .expect(201)
          .end(done);
      });

      it('should not add quiz with same name and version', done => {
        request(app)
        .post('/api/quizes')
        .set('Authorization', helpers.constants.token)
        .send(helpers.createQuiz({title: 'First title of quiz'}))
        .expect(res => {
          res.body.name.should.be.equal('MongoError');
          res.body.code.should.be.equal(500);
        })
        .expect(500)
        .end(done);
      });

      it('should not add quiz with missing data', done => {
        request(app)
        .post('/api/quizes')
        .set('Authorization', helpers.constants.token)
        .send(helpers.createQuiz({title: ''}))
        .expect(res => {
          res.body.name.should.be.equal('ValidationError');
          res.body.message.should.be.equal('quiz validation failed: title: Path `title` is required.');
          res.body.code.should.be.equal(500);
        })
        .expect(500)
        .end(done);
      });
    });

    describe('Getting quizzes', () => {
      it('should get quizzes list for requesting user', done => {
        request(app)
          .get('/api/quizes?page=1')
          .set('Authorization', helpers.constants.token)
          .send()
          .expect(res => {
            console.log(res.body)

          })
          .expect(200)
          .end(done);
      });

      // it('should not get quizzes list of different user', () => {
      //
      // });
    });
  });

  // describe('Testing /quizzes/:id endpoint', () => {
  //   describe('Requesting single quiz', () => {
  //     it('should get unpublished quiz with access token', () => {
  //
  //     });
  //
  //     it('should not get quiz not owned by requesting user', () => {
  //
  //     });
  //
  //     it('should get published quiz without access token', () => {
  //
  //     });
  //
  //     it('should not get unpublished quiz without access token', () => {
  //
  //     });
  //   });
  //
  //   describe('Updating single quiz', () => {
  //     it('should update quiz with access token', () => {
  //
  //     });
  //
  //     it('should update only results without access token', () => {
  //
  //     });
  //
  //     it('should not update unpublished quiz without access token', () => {
  //
  //     });
  //   });
  //
  //   describe('Deleting single quiz', () => {
  //     it('should delete quiz', () => {
  //
  //     });
  //
  //     it('should not allow to delete not owned quiz', () => {
  //
  //     });
  //
  //     it('should not allow to delete quiz without token', () => {
  //
  //     });
  //   });
  // });
});