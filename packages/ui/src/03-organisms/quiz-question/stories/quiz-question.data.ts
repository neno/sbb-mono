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
            text: '<p>Erklärungstext zur Antwort</p><p>Und noch ein Link: <a href="http://google.ch" target="_blank">http://google.ch</a></p>',
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
            text: '<p>Hier ein Bild:</p><img class="lazy-loaded" src="//via.placeholder.com/350x150" data-lazy-type="image" data-src="//via.placeholder.com/350x150" data-pin-nopin="true">',
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
