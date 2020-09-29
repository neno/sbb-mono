import { useEffect } from 'react';
import {
    QuizAction,
    FETCH_LOADING,
    FETCH_RESPONSE_COMPLETE,
    FETCH_ERROR,
    IApiData,
} from './models';

const useFetch = (dispatch: React.Dispatch<QuizAction>): void => {
    useEffect(() => {
        dispatch({ type: FETCH_LOADING });

        const fetchUrl = async () => {
            try {
                let result: IApiData;

                const root = document.getElementById('root');
                const apiUrl = root?.dataset.api;

                if (apiUrl) {
                    const response = await fetch(apiUrl);
                    result = await response.json();
                } else {
                    result = await import('./quiz.json');
                }

                dispatch({
                    type: FETCH_RESPONSE_COMPLETE,
                    payload: { result },
                });
            } catch (error) {
                // TODO: Implement error handling
                console.error(error);
                dispatch({
                    type: FETCH_ERROR,
                    payload: { error: error.message },
                });
            }
        };
        fetchUrl();
    }, [dispatch]);
};

export default useFetch;
