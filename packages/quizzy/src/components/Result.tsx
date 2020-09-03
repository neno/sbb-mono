import React from "react";
import { IResult, IQuestion } from "../models.d";
import { isCorrectlyAnswered } from "../helpers/helpers";

interface Props {
    results: IResult[];
    questions: IQuestion[];
}

const getScore = (questions: IQuestion[]) => {
    const result = questions.map((question) =>
        isCorrectlyAnswered(question.answers)
    );
    const count = result.filter((isCorrect) => isCorrect === true).length;
    if (count === 0) return 0;

    return (count / questions.length) * 100;
};

const evaluate = (results: IResult[], score: number) => {
    const availableResults = results.filter((result) => result.score <= score);
    return results[availableResults.length - 1];
};

const Result: React.FC<Props> = ({ results, questions }) => {
    const score = getScore(questions);
    const res = evaluate(results, score);
    return (
        <p aria-live="assertive" role="status">
            {res.text}
        </p>
    );
};

export default Result;
