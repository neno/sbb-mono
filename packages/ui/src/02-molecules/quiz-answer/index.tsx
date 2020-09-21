import React, { memo } from 'react';
import RadioButtonField from '../radio-button-field';
import CheckboxField from '../checkbox-field';

export interface Props {
    id: string;
    title: string;
    correct: boolean;
    checked?: boolean;
    questionId: number;
    questionType: string;
    showResults: boolean;
    toggleAnswer: (id: string) => void;
}

const QuizAnswer: React.FC<Props> = memo(
    ({
        id,
        questionId,
        questionType,
        title,
        correct,
        checked,
        toggleAnswer,
        showResults,
    }) => {
        let clsNames = `m-quiz-answer m-quiz-answer--${questionType}`;
        if (showResults) {
            clsNames += correct
                ? ' m-quiz-answer--correct'
                : ' m-quiz-answer--incorrect';
        }

        return (
            <div className={clsNames}>
                {questionType === 'single-choice' ? (
                    <RadioButtonField id={`quiz-answer-${id}`} name={`quiz-answer-${questionId}`} checked={checked} disabled={showResults} label={title} handleChange={toggleAnswer} />
                ) : (
                    <CheckboxField id={`quiz-answer-${id}`} name={`quiz-answer-${id}`} checked={checked} disabled={showResults} label={title} handleChange={toggleAnswer} />
                )}
            </div>
        );
    },
);

export default QuizAnswer;
