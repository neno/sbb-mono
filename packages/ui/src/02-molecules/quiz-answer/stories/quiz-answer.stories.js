/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import QuizAnswer from '../index';

export default {
    title: '02-Molecules/Quiz/Answer',
};

const handleChange = id => {
    // eslint-disable-next-line no-console
    console.log(id);
};

export const SingleChoice = () => renderToStaticMarkup(
    <QuizAnswer id="1" questionId="1" title="Single Choice" questionType="single-choice" checked handleChange={handleChange} showResults={false} />,
);

export const MultipleChoice = () => renderToStaticMarkup(
    <QuizAnswer id="2" questionId="1" title="Multiple Choice" questionType="multiple-choice" checked handleChange={handleChange} showResults={false} />,
);

export const Correct = () => renderToStaticMarkup(
    <QuizAnswer id="3" questionId="1" title="Answer Correct" questionType="single-choice" checked correct handleChange={handleChange} showResults />,
);

export const Incorrect = () => renderToStaticMarkup(
    <QuizAnswer id="4" questionId="1" title="Answer Incorrect" questionType="multiple-choice" checked handleChange={handleChange} showResults />,
);
