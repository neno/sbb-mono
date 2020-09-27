/* eslint-disable jest/expect-expect */

import quizData from '../fixtures/quiz.json';
import { IAnswer, IQuestion, IResult } from '../../src/models';

const questions: IQuestion[] = quizData.quiz.questions;
const answers: IAnswer[] = [];
questions.forEach((question: IQuestion) =>
    question.answers.forEach((answer: IAnswer) => {
        answers.push(answer);
    })
);
const resultsByScore: { [key: number]: string } = {};
quizData.quiz.results.forEach((result: IResult) => {
    resultsByScore[result.score] = result.text;
});

context('Evaluation', () => {
    describe('All answers correct', () => {
        it('Should display success message', () => {
            cy.visit('/');
            cy.get('.a-label').each(($label, index) => {
                const labelText = $label[0].innerText;
                const answer = answers.find((a) => a.title === labelText);
                if (answer && answer.correct) {
                    cy.get($label).click({ force: true });
                }
            });

            cy.get('button').click({ force: true });

            cy.get('.t-quiz__results').should(
                'contain.text',
                resultsByScore[100]
            );
        });
    });

    describe('All answers wrong', () => {
        it('Should display success message', () => {
            cy.visit('/');
            cy.get('.a-label').each(($label, index) => {
                const labelText = $label[0].innerText;
                const answer = answers.find((a) => a.title === labelText);
                if (answer && !answer.correct) {
                    cy.get($label).click({ force: true });
                }
            });

            cy.get('button').click({ force: true });

            cy.get('.t-quiz__results').should(
                'contain.text',
                resultsByScore[0]
            );
        });
    });

    describe('Half of questions correctly answered', () => {
        it('Should display correct message', () => {
            cy.visit('/');
            const correctAnswer: IAnswer = questions[0].answers.find(
                (a) => a.correct
            );
            const incorrectAnswer: IAnswer = questions[1].answers.find(
                (a) => !a.correct
            );

            if (correctAnswer && correctAnswer) {
                cy.get('.a-label').each(($label, index) => {
                    const labelText = $label[0].innerText;
                    if (
                        labelText === correctAnswer.title ||
                        labelText === incorrectAnswer.title
                    ) {
                        cy.get($label).click({ force: true });
                    }
                });
            }

            cy.get('button').click({ force: true });

            cy.get('.t-quiz__results').should(
                'contain.text',
                resultsByScore[50]
            );
        });
    });
});
