import { useEffect } from "react";
import {
    QuizAction,
    FETCH_LOADING,
    FETCH_RESPONSE_COMPLETE,
    FETCH_ERROR,
    IApiData,
} from "./models.d";
import { excludeApi } from "./config";

const useFetch = (url: string, dispatch: React.Dispatch<QuizAction>): void => {
    useEffect(() => {
        dispatch({ type: FETCH_LOADING });

        const fetchUrl = async () => {
            try {
                let result: IApiData;
                if (
                    process.env.NODE_ENV === "production" &&
                    !excludeApi.includes(window.location.hostname)
                ) {
                    const root = document.getElementById("root");
                    const apiUrl = root?.dataset.api;
                    if (!apiUrl) {
                        throw new Error(
                            'Missing data-api on root element, eg: <div id="root" data-api="http://my-example-api.com">…<div>'
                        );
                    }
                    const response = await fetch(apiUrl);
                    result = await response.json();
                    dispatch({
                        type: FETCH_RESPONSE_COMPLETE,
                        payload: { result },
                    });
                } else {
                    result = await import("./quiz.json");
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
    }, [dispatch, url]);
};

export default useFetch;
