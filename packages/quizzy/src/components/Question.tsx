import React from "react";
import { IQuestion } from "../models.d";
import Answer from "./Answer";
import { isCorrectlyAnswered } from "../helpers/helpers";

interface Props extends IQuestion {
    toggleAnswer: (id: number) => void;
    showResults: boolean;
}

const getQuestionClassNames = (
    showResults: boolean,
    isCorrect: boolean
): string => {
    let questionClassNames = "o-question";
    if (showResults) {
        questionClassNames += ` o-question--${
            isCorrect ? "correct" : "incorrect"
        }`;
    }

    return questionClassNames;
};

/* eslint-disable react/no-danger */

const Question: React.FC<Props> = ({
    id,
    questionType,
    title,
    text,
    answers,
    toggleAnswer,
    showResults,
}) => {
    const Correct = () => (
        <span dangerouslySetInnerHTML={{ __html: "&#10003;" }} />
    );
    const Incorrect = () => (
        <span dangerouslySetInnerHTML={{ __html: "&#10005;" }} />
    );

    const isCorrect = isCorrectlyAnswered(answers);

    return (
        <fieldset className={getQuestionClassNames(showResults, isCorrect)}>
            <legend>
                {title}
                {showResults && (isCorrect ? <Correct /> : <Incorrect />)}
            </legend>
            <div dangerouslySetInnerHTML={{ __html: text }} />
            <ol>
                {answers.map((answer) => (
                    <li key={answer.id}>
                        <Answer
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
