/* eslint-disable import/prefer-default-export */
export const apiEndpoint =
    process.env.NODE_ENV === "development"
        ? "https://quizzy-api.netlify.app/quiz.json"
        : "https://quizzy-api.netlify.app/quiz.json";

export const excludeApi = ["quizzy-staging.netlify.app"];
