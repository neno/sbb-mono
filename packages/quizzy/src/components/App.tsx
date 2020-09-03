import React, { useReducer, FormEventHandler } from "react";
import { TOGGLE_ANSWER, SHOW_RESULTS, RESET_QUIZ } from "../models.d";
import { apiEndpoint } from "../config";
import reducer, { INITIAL_STATE } from "../reducer";
import useFetch from "../useFetch";
import Question from "./Question";
import Result from "./Result";

const App: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    useFetch(apiEndpoint, dispatch);

    const toggleAnswer = (id: number): void => {
        dispatch({
            type: TOGGLE_ANSWER,
            payload: { id },
        });
    };

    const handleSubmit: FormEventHandler = (event): void => {
        event.preventDefault();
        dispatch({
            type: SHOW_RESULTS,
        });
    };

    const handleReset = (): void => {
        dispatch({
            type: RESET_QUIZ,
        });
    };

    if (state.error) {
        return <div>{state.error}</div>;
    }

    return state && state.quiz ? (
        <article>
            <h1>{state.quiz.title}</h1>
            <form action="#" onSubmit={handleSubmit}>
                {state.quiz.questions.map((question) => (
                    <div className="t-quiz__questions" key={question.id}>
                        <Question
                            id={question.id}
                            questionType={question.questionType}
                            title={question.title}
                            text={question.text}
                            answers={question.answers}
                            toggleAnswer={toggleAnswer}
                            showResults={state.showResults}
                        />
                    </div>
                ))}
                <div className="t-quiz__actions">
                    <button type="submit">Submit</button>
                    <button type="button" onClick={handleReset}>
                        Reset
                    </button>
                </div>
            </form>
            <div className="t-quiz__results">
                {state.showResults && (
                    <Result
                        questions={state.quiz.questions}
                        results={state.quiz.results}
                    />
                )}
            </div>
        </article>
    ) : (
        <div>Loading…</div>
    );
};

export default App;
