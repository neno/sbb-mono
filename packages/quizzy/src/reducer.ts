import {
    getQuestionByAnswerId,
    getQuestionIdFromAnswerId,
} from './helpers/helpers';
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
    QuestionType,
} from './models';

export const INITIAL_STATE: IState = {
    quizReset: null,
    quiz: null,
    loading: true,
    error: null,
    showResults: false,
};

// const checkSingleChoice = (
//     questionId: string,
//     questionType: QuestionType,
//     answer: IAnswer,
//     checkedId: string | undefined
// ): boolean => {
//     console.log('checkSingleChoice', answer, checkedId);
//     if (!checkedId) {
//         return false;
//     }

//     if (answer.id === checkedId) {
//         return true;
//     }
//     if (answer.id !== checkedId) {
//         return false;
//     }

//     // return !answer.checked || false;

//     // return answer.checked || false;
// };

// const checkMultipleChoice = (
//     questionId: string,
//     questionType: QuestionType,
//     answer: IAnswer,
//     checkedId: string | undefined
// ): boolean => {
//     if (!checkedId) {
//         return false;
//     }

//     return false;
// };

const checkAnswer = (
    questionId: string,
    answer: IAnswer,
    checkedQuestionType: QuestionType,
    checkedId: string | undefined
): boolean => {
    if (!checkedId) {
        return false;
    }

    if (checkedQuestionType === 'multiple-choice') {
        if (checkedId === answer.id) {
            return !answer.checked;
        }
        return answer.checked || false;
    }

    if (checkedQuestionType === 'single-choice') {
        if (checkedId === answer.id) {
            return true;
        }
        return false;
    }

    return false;
};

const mapResult = (data: IQuiz, checkedId?: string) => {
    const { id } = getQuestionByAnswerId(data.questions, checkedId);

    return {
        ...data,
        questions: data.questions.map((question) => {
            return {
                ...question,
                id: question.id.toString(),
                answers: question.answers.map((answer) => {
                    const newAnswer = {
                        ...answer,
                        id: answer.id.toString(),
                        checked: !!answer.checked,
                    };

                    if (checkedId && id === question.id.toString()) {
                        if (question.questionType === 'single-choice') {
                            newAnswer.checked = false;
                        }
                    }

                    if (newAnswer.id === checkedId) {
                        newAnswer.checked = !newAnswer.checked;
                    }

                    return newAnswer;
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
