import React from 'react';
import QuizQuestion from '@sbb-mono/ui/src/03-organisms/quiz-question';
import { IQuestion } from '../models';
import { isCorrectlyAnswered } from '../helpers/helpers';

interface Props extends IQuestion {
    toggleAnswer: (id: string) => void;
    showResults: boolean;
}

const Question: React.FC<Props> = ({
    id,
    questionType,
    title,
    text,
    answers,
    toggleAnswer,
    showResults,
}) => {
    const isCorrect = isCorrectlyAnswered(answers);

    return (
        <QuizQuestion
            id={id}
            title={title}
            text={text}
            questionType={questionType}
            toggleAnswer={toggleAnswer}
            showResults={showResults}
            answers={answers}
            isCorrect={isCorrect}
        />
    );
};

export default Question;
