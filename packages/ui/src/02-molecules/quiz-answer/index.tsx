import React, { memo } from 'react';
import RadioButton from '../radio-button';
import Checkbox from '../checkbox';

export interface Props {
    id: string;
    title: string;
    text?: string;
    correct: boolean;
    checked?: boolean;
    questionId: string;
    questionType: string;
    showResults: boolean;
    toggleAnswer: (id: string) => void;
}

/* eslint-disable react/no-danger */

const QuizAnswer: React.FC<Props> = memo(
    ({
        id,
        questionId,
        questionType,
        title,
        text,
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

        const fieldPrefix = 'quiz-answer-';

        const handleChange = () => {
            toggleAnswer(id);
        };

        return (
            <div className={clsNames}>
                {text && <div className="m-quiz-answer__text" dangerouslySetInnerHTML={{ __html: text }} />}
                {questionType === 'single-choice' ? (
                    <RadioButton
                        id={`${fieldPrefix}${id}`}
                        name={`${fieldPrefix}${questionId}`}
                        checked={checked}
                        disabled={showResults}
                        label={title}
                        handleChange={handleChange}
                        classes={['m-quiz-answer__field']}
                    />
                ) : (
                    <Checkbox
                        id={`${fieldPrefix}${id}`}
                        name={`${fieldPrefix}${id}`}
                        checked={checked}
                        disabled={showResults}
                        label={title}
                        handleChange={handleChange}
                        classes={['m-quiz-answer__field']}
                    />
                )}
            </div>
        );
    },
);

export default QuizAnswer;
