import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import QuizAnswer, { Props } from './index';

const defaultProps = {
    questionId: '100',
    questionType: 'single-choice',
    id: '101',
    title: 'Option 1',
    text: '<p>My HTML paragraph</p>',
    toggleAnswer: jest.fn(() => {}),
    correct: false,
    showResults: false,
    checked: false,
};

const getAnswerComponent = (props: Props) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <QuizAnswer {...props} />
);

describe('QuizAnswer', () => {
    test('toggleAnswer', () => {
        render(getAnswerComponent(defaultProps));
        fireEvent.click(screen.getByLabelText(defaultProps.title));
        expect(defaultProps.toggleAnswer).toHaveBeenCalled();
    });

    test('Not checked', () => {
        render(getAnswerComponent(defaultProps));
        const input = screen.getByLabelText(defaultProps.title);
        expect(input.getAttribute('checked')).toBeNull();
    });

    test('Checked', () => {
        render(getAnswerComponent({ ...defaultProps, checked: true }));
        const input = screen.getByLabelText(defaultProps.title);
        expect(input.getAttribute('checked')).not.toBeNull();
    });

    test('should dangerously set innerHTML for text', () => {
        render(getAnswerComponent(defaultProps));
        const paragraph = screen.getByText('My HTML paragraph');
        expect(paragraph.outerHTML).toBe(defaultProps.text);
    });

    describe('Atomic Design and BEM', () => {
        test('Default', () => {
            render(getAnswerComponent(defaultProps));
            expect(screen.getByTestId('quiz-answer').classList).toContain(
                'o-quiz-answer',
            );
            expect(screen.getByTestId('quiz-answer').classList).not.toContain(
                'o-quiz-answer--incorrect',
            );
            expect(screen.getByTestId('quiz-answer').classList).not.toContain(
                'o-quiz-answer--correct',
            );
        });

        describe('Show Results', () => {
            test('For incorrect answer', () => {
                render(getAnswerComponent({ ...defaultProps, showResults: true, correct: false }));
                expect(screen.getByTestId('quiz-answer').classList).toContain(
                    'o-quiz-answer--incorrect',
                );
            });

            test('For correct answer', () => {
                render(getAnswerComponent({ ...defaultProps, showResults: true, correct: true }));
                expect(screen.getByTestId('quiz-answer').classList).toContain(
                    'o-quiz-answer--correct',
                );
            });
        });
    });

    describe('Single-Choice', () => {
        test('Radio button', () => {
            render(getAnswerComponent({ ...defaultProps, questionType: 'single-choice' }));
            expect(screen.getByTestId('quiz-answer').classList).toContain(
                'o-quiz-answer--single-choice',
            );
            const input = screen.getByLabelText(defaultProps.title);
            expect(input.getAttribute('type')).toBe('radio');
            expect(input.getAttribute('name')).toBe(`quiz-answer-${defaultProps.questionId}`);
        });
    });

    describe('Multiple-Choice', () => {
        test('Checkbox', () => {
            render(getAnswerComponent({ ...defaultProps, questionType: 'multiple-choice' }));
            expect(screen.getByTestId('quiz-answer').classList).toContain(
                'o-quiz-answer--multiple-choice',
            );
            const input = screen.getByLabelText(defaultProps.title);
            expect(input.getAttribute('type')).toBe('checkbox');
            expect(input.getAttribute('name')).toBe(`quiz-answer-${defaultProps.id}`);
        });
    });
});
