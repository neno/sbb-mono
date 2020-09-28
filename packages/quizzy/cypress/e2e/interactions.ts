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
    describe('Disable Form', () => {
        beforeEach(() => {
            cy.visit('/');
            cy.get('form').submit();
        });

        it('Should show result', () => {
            cy.get('.t-quiz__results').should('be.not.empty');
        });

        it('Should disable inputs', () => {
            cy.get('input').each(($input) => {
                cy.get($input).should('be.disabled');
            });
        });
    });

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

            cy.get('[data-cy="evaluate"]').click({ force: true });

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

            cy.get('[data-cy=evaluate]').click({ force: true });

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

            cy.get('[data-cy=evaluate]').click({ force: true });

            cy.get('.t-quiz__results').should(
                'contain.text',
                resultsByScore[50]
            );
        });
    });
});

describe('Reset', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('form').submit();
        cy.get('[data-cy=reset]').click({ force: true });
    });

    it('Should not display result', () => {
        cy.get('.t-quiz__results').should('be.empty');
    });

    it('Should enable inputs', () => {
        cy.get('input').each(($input) => {
            cy.get($input).should('be.enabled');
        });
    });
});
