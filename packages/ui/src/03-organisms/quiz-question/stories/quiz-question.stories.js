/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { singleChoice, multipleChoice } from './quiz-question.data';
import QuizQuestion from '../index';

export default {
    title: '03-Organisms/Quiz Question',
};

const toggleAnswer = id => {
    // eslint-disable-next-line no-console
    console.log(id);
};

export const SingleChoice = () => renderToStaticMarkup(
    <QuizQuestion
        id={singleChoice.id}
        questionType={singleChoice.questionType}
        title={singleChoice.title}
        text={singleChoice.text}
        toggleAnswer={toggleAnswer}
        showResults={false}
        answers={singleChoice.answers}
    />,
);

export const SingleChoiceShowResults = () => renderToStaticMarkup(
    <QuizQuestion
        id={singleChoice.id}
        questionType={singleChoice.questionType}
        title={singleChoice.title}
        text={singleChoice.text}
        toggleAnswer={toggleAnswer}
        showResults
        isCorrect
        answers={singleChoice.answers}
    />,
);

export const MultipleChoice = () => renderToStaticMarkup(
    <QuizQuestion
        id={multipleChoice.id}
        questionType={multipleChoice.questionType}
        title={multipleChoice.title}
        text={multipleChoice.text}
        toggleAnswer={toggleAnswer}
        showResults={false}
        answers={multipleChoice.answers}
    />,
);

export const MultipleChoiceShowResults = () => renderToStaticMarkup(
    <QuizQuestion
        id={multipleChoice.id}
        questionType={multipleChoice.questionType}
        title={multipleChoice.title}
        text={multipleChoice.text}
        toggleAnswer={toggleAnswer}
        showResults
        isCorrect={false}
        answers={multipleChoice.answers}
    />,
);
