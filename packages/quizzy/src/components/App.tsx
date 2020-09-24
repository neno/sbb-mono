import React, { useReducer, FormEventHandler } from 'react';
import MyButton from '@sbb-mono/ui/src/01-atoms/button';
import { TOGGLE_ANSWER, SHOW_RESULTS, RESET_QUIZ } from '../models';
import { apiEndpoint } from '../config';
import reducer, { INITIAL_STATE } from '../reducer';
import useFetch from '../useFetch';
import Question from './Question';
import Result from './Result';

const App: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    useFetch(apiEndpoint, dispatch);

    const toggleAnswer = (id: string): void => {
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

    const handleConfirm = (): void => {};

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
                <div className="t-quiz__results">
                    {state.showResults && (
                        <Result
                            questions={state.quiz.questions}
                            results={state.quiz.results}
                        />
                    )}
                </div>
                <p>
                    <strong>{state.quiz.changesEffective}</strong>
                </p>
                <p>{state.quiz.confirmMessage}</p>
                <div className="t-quiz__actions">
                    {!state.showResults && (
                        <MyButton type="submit">{state.quiz.submit}</MyButton>
                    )}
                    {state.showResults && (
                        <MyButton
                            type="button"
                            arrows
                            classes={['a-btn--primary']}
                            handleClick={handleConfirm}
                        >
                            {state.quiz.confirmChanges}
                        </MyButton>
                    )}
                    {state.showResults && (
                        <MyButton type="button" handleClick={handleReset}>
                            {state.quiz.repeat}
                        </MyButton>
                    )}
                </div>
            </form>
        </article>
    ) : (
        <div>Loading…</div>
    );
};

export default App;
