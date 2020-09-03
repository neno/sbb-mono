export interface IState {
    quizReset: IQuiz | null;
    quiz: IQuiz | null;
    loading: boolean;
    error: string | null;
    showResults: boolean;
}

export interface IQuiz {
    title: string;
    questions: IQuestion[];
    results: IResult[];
}

export interface IQuestion {
    id: number;
    title: string;
    text: string;
    questionType: typeof QuestionType;
    answers: IAnswer[];
}

export type QuestionType = "multiple-choice" | "single-choice";

export interface IAnswer {
    id: number;
    title: string;
    correct: boolean;
    checked?: boolean;
}

export interface IResult {
    score: number;
    text: string;
}

export interface IApiData {
    quiz: IQuiz;
}

export const TOGGLE_ANSWER = "TOGGLE_ANSWER";
export const SHOW_RESULTS = "SHOW_RESULTS";
export const RESET_QUIZ = "RESET_QUIZ";
export const FETCH_LOADING = "FETCH_LOADING";
export const FETCH_RESPONSE_COMPLETE = "FETCH_RESPONSE_COMPLETE";
export const FETCH_ERROR = "FETCH_ERROR";

export type QuizAction =
    | { type: typeof TOGGLE_ANSWER; payload: { id: number } }
    | { type: typeof SHOW_RESULTS }
    | { type: typeof RESET_QUIZ }
    | { type: typeof FETCH_LOADING }
    | { type: typeof FETCH_RESPONSE_COMPLETE; payload: { result: IApiData } }
    | { type: typeof FETCH_ERROR; payload: { error: string } };

export interface AnswerProps extends IAnswer {
    questionId: number;
    questionType: string;
    showResults: boolean;
    toggleAnswer: (id: number) => void;
}
