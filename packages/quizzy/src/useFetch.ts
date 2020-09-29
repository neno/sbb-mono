import { useEffect } from 'react';
import {
    QuizAction,
    FETCH_LOADING,
    FETCH_RESPONSE_COMPLETE,
    FETCH_ERROR,
    IApiData,
} from './models';

export const getAPIUrl = (): string | undefined => {
    const root = document.getElementById('root');
    const apiUrl = root?.dataset.api;
    return apiUrl;
};

export const fetchDataFromAPI = async (apiUrl: string): Promise<IApiData> => {
    const response = await fetch(apiUrl);
    const result = await response.json();
    return result;
};

const loadDataFromFile = async (): Promise<IApiData> => {
    const result = await import('./quiz.json');
    return result;
};

export const fetchData = async (apiUrl?: string): Promise<IApiData> => {
    const result = await (apiUrl
        ? fetchDataFromAPI(apiUrl)
        : loadDataFromFile());

    return result;
};

const useFetch = (dispatch: React.Dispatch<QuizAction>): void => {
    useEffect(() => {
        dispatch({ type: FETCH_LOADING });

        const fetchUrl = async () => {
            try {
                const apiUrl = getAPIUrl();
                const result: IApiData = await fetchData(apiUrl);

                if (!result) {
                    throw new Error(
                        'You need to provide either a data-api attribute (eg: <div id="quiz" data-api="http://my-example-api.com">…<div>) or a quiz.json file in the root directory.'
                    );
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
