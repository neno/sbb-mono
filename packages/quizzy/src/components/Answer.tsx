import React, { memo } from "react";
import { AnswerProps } from "../models.d";

const Answer: React.FC<AnswerProps> = memo(
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
        const RadioButton = () => (
            <input
                type="radio"
                name={`answer-${questionId}`}
                id={`answer-${id}`}
                checked={checked}
                onChange={() => toggleAnswer(id)}
                disabled={showResults}
            />
        );
        const Checkbox = () => (
            <input
                type="checkbox"
                name={`answer-${id}`}
                id={`answer-${id}`}
                checked={checked}
                onChange={() => toggleAnswer(id)}
                disabled={showResults}
            />
        );

        let labelClassNames = `a-quiz-answer a-quiz-answer--${questionType}`;
        if (showResults) {
            labelClassNames += correct
                ? " a-quiz-answer--correct"
                : " a-quiz-answer--incorrect";
        }

        return (
            <label htmlFor={`answer-${id}`} className={labelClassNames}>
                {questionType === "single-choice" ? (
                    <RadioButton />
                ) : (
                    <Checkbox />
                )}
                {title}
            </label>
        );
    }
);

export default Answer;
