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
          .send({
            title: 'Some title example for quiz',
            successMessage: 'Message that will be shown if user pass quiz',
            failureMessage: 'Message that will be shown if user fail quiz',
            pointsToSuccess: 24,
            status: 'published',
            version: 4,
            questions: [{
              index: 1,
              type: 'multiple',
              question: 'How old is statue of liberty?',
              answers: [
                'Very old',
                'Pretty young',
                'Not that old'
              ],
              correctAnswers: [
                1,
                3
              ]
            }]
          })
          .expect(201)
          .end(done);
      });

      it('should not add quiz with same name and version', () => {

      });

      it('should not add quiz with missing data', () => {

      });
    });

    describe('Getting quizzes', () => {
      it('should get quizzes list for requesting user', () => {

      });

      it('should not get quizzes list of different user', () => {

      });
    });
  });

  describe('Testing /quizzes/:id endpoint', () => {
    describe('Requesting single quiz', () => {
      it('should get unpublished quiz with access token', () => {

      });

      it('should not get quiz not owned by requesting user', () => {

      });

      it('should get published quiz without access token', () => {

      });

      it('should not get unpublished quiz without access token', () => {

      });
    });

    describe('Updating single quiz', () => {
      it('should update quiz with access token', () => {

      });

      it('should update only results without access token', () => {

      });

      it('should not update unpublished quiz without access token', () => {

      });
    });

    describe('Deleting single quiz', () => {
      it('should delete quiz', () => {

      });

      it('should not allow to delete not owned quiz', () => {

      });

      it('should not allow to delete quiz without token', () => {

      });
    });
  });
});