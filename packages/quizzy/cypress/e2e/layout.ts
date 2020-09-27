/* eslint-disable jest/expect-expect */

import quizData from '../fixtures/quiz.json';
import { IAnswer, IQuestion } from '../../src/models';

context('Test Quiz Layout', () => {
    before(() => {
        cy.visit('/');
    });

    it('Should have a title', () => {
        cy.get('h1').should('contain.text', quizData.quiz.title);
    });

    describe('Questions', () => {
        const questions: IQuestion[] = quizData.quiz.questions;

        it('Should have title', () => {
            const questionTitles: string[] = questions.map(
                (question) => question.title
            );

            cy.get('.o-quiz-question__legend').each((legend: string, index) => {
                cy.get(legend).should('contain.text', questionTitles[index]);
            });
        });

        it('Should have HTML description', () => {
            const questionDescriptions: string[] = questions.map(
                (question: IQuestion) => question.text
            );

            cy.get('.o-quiz-question__description').each(
                ($description: JQuery<HTMLElement>, index: number) => {
                    cy.get($description).should(
                        'contain.html',
                        questionDescriptions[index]
                    );
                }
            );
        });

        describe('Answers', () => {
            it('Should exist', () => {
                const labels: string[] = [];
                questions.forEach((question: IQuestion) =>
                    question.answers.forEach((answer: IAnswer) => {
                        labels.push(answer.title);
                    })
                );

                cy.get('.a-label').each(
                    ($label: JQuery<HTMLElement>, index: number) => {
                        // console.log(label[0].innerHTML.should);
                        cy.get($label).should('contain.text', labels[index]);
                        // label[0].innerHTML().should('contain.text', 'hallo');
                    }
                );
            });
        });
    });
});
