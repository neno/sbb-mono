/* eslint-disable import/prefer-default-export */
export const singleChoice = {
    id: '100',
    title: 'Frage 1',
    text: 'Erklärungstext 1',
    questionType: 'single-choice',
    answers: [
        {
            id: '101',
            title: 'Antwort 1.1',
            correct: true,
            checked: true,
        },
        {
            id: '102',
            title: 'Antwort 1.2',
            correct: false,
        },
        {
            id: '103',
            title: 'Antwort 1.3',
            correct: false,
        },
    ],
};

export const multipleChoice = {
    id: '200',
    title: 'Frage 2',
    text: 'Erklärungstext 2',
    questionType: 'multiple-choice',
    answers: [
        {
            id: '201',
            title: 'Antwort 2.1',
            correct: false,
            checked: true,
        },
        {
            id: '202',
            title: 'Antwort 2.2',
            correct: true,
        },
        {
            id: '203',
            title: 'Antwort 2.3',
            correct: false,
            checked: true,
        },
    ],
};
