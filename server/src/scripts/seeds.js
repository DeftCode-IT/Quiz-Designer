const mongoose = require('mongoose');
const p = require('bluebird');
const quizModel = require('./../models/quiz');
const questionModel = require('./../models/question');

mongoose.Promise = p;

const data = [
  {
    title: 'Jak bardzo znasz Gwiezdne Wojny?',
    description: 'Sprawdź swoją wiedzę z uniwersum Harrego Pottera',
    successMessage: 'Jesteś maniakiem HP!',
    failureMessage: 'Wynik tego quizu to znak, że jesteś mugolem',
    pointsToSuccess: 5,
    editMode: true,
    version: 1,
    createdBy: 'Rowling',
  },
  {
    title: 'Javascript ES6 quiz',
    description: 'Czy znasz już wszystkie możliwości ES6?',
    successMessage: 'Rządzisz!',
    failureMessage: 'Spróbuj ponownie...',
    pointsToSuccess: 10,
    editMode: true,
    version: 1,
    createdBy: 'JsNinja',
  },
];

const questionExample = {
  type: 'single',
  question: 'Pytanie 1',
  answers: [
    'a',
    'b',
    'c',
  ],
  correctAnswers: [1],
};

const seedDB = () => quizModel.remove({})
  .then(() => {
    const quizs = [];

    data.forEach(seed => quizs.push(quizModel.create(seed)));

    return p.all(quizs);
  })
  .map(quiz => questionModel.create(questionExample)
    .then(question => quizModel.findByIdAndUpdate(quiz._id, { $push: { questions: question._id } })));

module.exports = seedDB;
