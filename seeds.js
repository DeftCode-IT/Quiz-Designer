const mongoose        = require('mongoose');
const quiz            = require('./models/quiz');
const question        = require('./models/question');


var data = [
    {
    title: 'Jak bardzo znasz Gwiezdne Wojny?', 
    description: 'Sprawdź swoją wiedzę z uniwersum Harrego Pottera',
    successMessage: 'Jesteś maniakiem HP!',
    failureMessage: 'Wynik tego quizu to znak, że jesteś mugolem',
    pointsToSuccess: 5,
    editMode: true,
    version: 0.1,
    createdBy: 'Rowling'
    },
    {
        title: 'Javascript ES6 quiz', 
        description: 'Czy znasz już wszystkie możliwości ES6?',
        successMessage: 'Rządzisz!',
        failureMessage: 'Spróbuj ponownie...',
        pointsToSuccess: 10,
        editMode: true,
        version: 0.1,
        createdBy: 'JsNinja'
        }

];
    
function seedDB(){

    //Delete all quizes.

    quiz.remove({}, err => {
    if(err){
        console.log(err);
    }
    console.log('all quizzess deleted');
    
        //Add few new quizes.
        data.forEach(seed => {
            quiz.create(seed, (err, quiz) => {
                if(err){
                    return console.log(err);
                    
                }else{
                    console.log('Quiz created');
                    question.create(
                        {
                            type: 'single',
                            question: 'Pytanie 1',
                            answers: [
                                'a',
                                'b',
                                'c'
                            ],
                            correctAnswers: ['a']
                        },(err, question) =>{
                            if(err){
                                return console.log(err);
                            
                            }
                            quiz.questions.push(question);
                            quiz.save();
                            console.log('Created new question!');
                        });
                }
            });
        });
    });
}

module.exports = seedDB;

