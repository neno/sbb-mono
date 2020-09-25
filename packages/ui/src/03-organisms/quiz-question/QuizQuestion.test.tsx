import React from 'react';
import { render, screen } from '@testing-library/react';
import QuizQuestion, { Props, QuestionType } from './index';
import { singleChoice } from './stories/quiz-question.data';

const getQuestionComponent = (props: Props) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <QuizQuestion {...props} />
);

const defaultProps = {
    ...singleChoice,
    toggleAnswer: jest.fn(() => {}),
    showResults: false,
    isCorrect: false,
    questionType: singleChoice.questionType as QuestionType,
};

describe('QuizQuestion', () => {
    test('Default', () => {
        render(getQuestionComponent({ ...defaultProps, showResults: false, isCorrect: false }));
        expect(screen.getByTestId('quiz-question').classList).toContain(
            'o-quiz-question',
        );
        expect(screen.getByTestId('quiz-question').classList).not.toContain(
            'o-quiz-question--incorrect',
        );
        expect(screen.getByTestId('quiz-question').classList).not.toContain(
            'o-quiz-question--correct',
        );
    });

    test('For incorrect answer', () => {
        render(getQuestionComponent({ ...defaultProps, showResults: true, isCorrect: false }));
        expect(screen.getByTestId('quiz-question').classList).toContain(
            'o-quiz-question--incorrect',
        );
        expect(screen.getByTestId('icon-cross').classList).not.toBeNull();
    });

    test('For correct answer', () => {
        render(getQuestionComponent({ ...defaultProps, showResults: true, isCorrect: true }));
        expect(screen.getByTestId('quiz-question').classList).toContain(
            'o-quiz-question--correct',
        );
        expect(screen.getByTestId('icon-checkmark').classList).not.toBeNull();
    });
});
