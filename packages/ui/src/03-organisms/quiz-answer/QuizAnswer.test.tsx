import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import QuizAnswer, { Props } from './index';

const defaultProps = {
    questionId: '100',
    questionType: 'single-choice',
    id: '101',
    title: 'Option 1',
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
});
