import React from 'react';
import QuizAnswer, { Props as AnswerProps } from '../../02-molecules/quiz-answer';
import Icon from '../../01-atoms/icon';

type QuestionType = 'multiple-choice' | 'single-choice';

interface Props {
    id: number;
    title: string;
    text: string;
    questionType: QuestionType;
    toggleAnswer: (id: string) => void;
    showResults: boolean;
    answers: AnswerProps[];
    isCorrect: boolean;
}

/* eslint-disable react/no-danger */

const Question: React.FC<Props> = ({
    id,
    questionType,
    title,
    text,
    answers,
    toggleAnswer,
    showResults,
    isCorrect,
}) => {
    const Correct = () => (
        <Icon name="checkmark" />
    );
    const Incorrect = () => (
        <Icon name="cross" />
    );

    const baseCls = 'o-quiz-question';
    let clsNames = baseCls;
    if (showResults) {
        clsNames += isCorrect ? ` ${baseCls}--correct` : ` ${baseCls}--incorrect`;
    }

    return (
        <fieldset className={clsNames}>
            <legend className="o-quiz-question__legend">
                {title}
                {showResults && (isCorrect ? <Correct /> : <Incorrect />)}
            </legend>
            <div dangerouslySetInnerHTML={{ __html: text }} />
            <ol className="o-quiz-question__answers">
                {answers.map(answer => (
                    <li key={answer.id}>
                        <QuizAnswer
                            questionId={id}
                            questionType={questionType}
                            id={answer.id}
                            title={answer.title}
                            correct={answer.correct}
                            checked={answer.checked}
                            toggleAnswer={toggleAnswer}
                            showResults={showResults}
                        />
                    </li>
                ))}
            </ol>
        </fieldset>
    );
};

export default Question;
