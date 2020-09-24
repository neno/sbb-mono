import { getQuestionByAnswerId } from './helpers/helpers';
import {
    QuizAction,
    IState,
    FETCH_LOADING,
    FETCH_ERROR,
    FETCH_RESPONSE_COMPLETE,
    TOGGLE_ANSWER,
    IQuiz,
    SHOW_RESULTS,
    RESET_QUIZ,
    IAnswer,
    IQuestion,
} from './models';

export const INITIAL_STATE: IState = {
    quizReset: null,
    quiz: null,
    loading: true,
    error: null,
    showResults: false,
};

const checkAnswer = (
    answer: IAnswer,
    currentQuestion: IQuestion,
    questions: IQuestion[],
    checkedAnswerId?: string
) => {
    const { id } = getQuestionByAnswerId(questions, checkedAnswerId);
    const newAnswer: IAnswer = {
        ...answer,
        id: answer.id.toString(),
        checked: !!answer.checked,
    };

    if (checkedAnswerId && id === currentQuestion.id.toString()) {
        if (currentQuestion.questionType === 'single-choice') {
            newAnswer.checked = false;
        }
    }

    if (newAnswer.id === checkedAnswerId) {
        newAnswer.checked = !newAnswer.checked;
    }

    return newAnswer;
};

const mapResult = (data: IQuiz, checkedId?: string) => {
    return {
        ...data,
        questions: data.questions.map((question) => {
            return {
                ...question,
                id: question.id.toString(),
                answers: question.answers.map((answer) => {
                    return checkAnswer(
                        answer,
                        question,
                        data.questions,
                        checkedId
                    );
                }),
            };
        }),
    };
};

const reducer = (state = INITIAL_STATE, action: QuizAction): IState => {
    if (action.type === FETCH_LOADING) {
        return { ...state, loading: true, quiz: null, error: null };
    }

    if (action.type === FETCH_ERROR) {
        return {
            ...state,
            loading: false,
            quiz: null,
            error: action.payload.error,
        };
    }

    if (action.type === FETCH_RESPONSE_COMPLETE) {
        const result = mapResult(action.payload.result.quiz);
        return {
            ...state,
            quizReset: result,
            quiz: result,
            loading: false,
            error: null,
        };
    }

    if (action.type === TOGGLE_ANSWER) {
        if (state.quiz) {
            const quiz = mapResult(state.quiz, action.payload.id);
            return { ...state, quiz };
        }
        return state;
    }

    if (action.type === SHOW_RESULTS) {
        return {
            ...state,
            showResults: true,
        };
    }

    if (action.type === RESET_QUIZ) {
        return {
            ...state,
            quiz: state.quizReset && { ...state.quizReset },
            showResults: false,
        };
    }

    return state;
};

export default reducer;
