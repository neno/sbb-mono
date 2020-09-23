/* eslint-disable import/prefer-default-export */
import { IAnswer, IQuestion } from '../models';

export const isCorrectlyAnswered = (answers: IAnswer[]): boolean => {
    let isCorrect = true;

    answers.forEach((answer) => {
        if (answer.checked !== answer.correct) {
            isCorrect = false;
        }
    });

    return isCorrect;
};

export const getQuestionByAnswerId = (
    questions: IQuestion[],
    answerId: string | undefined
): IQuestion | Record<string, unknown> => {
    let q = {};

    if (answerId) {
        questions.forEach((question) => {
            const answerFound = question.answers.find(
                (answer) => answer.id.toString() === answerId
            );
            if (answerFound) {
                q = question;
            }
        });
    }

    return q;
};
