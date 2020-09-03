/* eslint-disable import/prefer-default-export */
import { IAnswer } from "../models.d";

export const isCorrectlyAnswered = (answers: IAnswer[]): boolean => {
    let isCorrect = true;

    answers.forEach((answer) => {
        if (answer.checked !== answer.correct) {
            isCorrect = false;
        }
    });

    return isCorrect;
};
