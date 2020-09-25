import React, { memo } from 'react';
import RadioButton from '../../02-molecules/radio-button';
import Checkbox from '../../02-molecules/checkbox';

export interface Props {
    id: string;
    title: string;
    checked: boolean;
    correct: boolean;
    questionId: string;
    questionType: string;
    showResults: boolean;
    toggleAnswer: (id: string) => void;
    text?: string;
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
        let clsNames = `o-quiz-answer o-quiz-answer--${questionType}`;
        if (showResults) {
            clsNames += correct
                ? ' o-quiz-answer--correct'
                : ' o-quiz-answer--incorrect';
        }

        const fieldPrefix = 'quiz-answer-';

        const handleChange = () => {
            toggleAnswer(id);
        };

        return (
            <div className={clsNames} data-testid="quiz-answer">
                {questionType === 'single-choice' ? (
                    <RadioButton
                        id={`${fieldPrefix}${id}`}
                        name={`${fieldPrefix}${questionId}`}
                        checked={!!checked}
                        disabled={!!showResults}
                        label={title}
                        handleChange={handleChange}
                        classes={['m-quiz-answer__field']}
                    />
                ) : (
                    <Checkbox
                        id={`${fieldPrefix}${id}`}
                        name={`${fieldPrefix}${id}`}
                        checked={!!checked}
                        disabled={!!showResults}
                        label={title}
                        handleChange={handleChange}
                        classes={['m-quiz-answer__field']}
                    />
                )}
                {text && <div className="o-quiz-answer__text" dangerouslySetInnerHTML={{ __html: text }} />}
            </div>
        );
    },
);

export default QuizAnswer;
