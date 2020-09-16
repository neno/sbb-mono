import { TableData } from '../index';

export const tableData: TableData = {
    head: ['Jahr', 'Anzahl Bahnhöfe*', 'Anteil Reisender', 'Extra Heading 1', 'Extra Heading 2'],
    body: {
        headings: [],
        data: [
            ['2017', '335 BehiG-konform', '58 Prozent', '-', 'Lorem'],
            ['2023', '556 BehiG-konform', '93 Prozent', '-', 'Lorem'],
            ['Nach 2023', '679 BehiG-konform', '99 Prozent', '-', 'Lorem'],
        ],
    },
};

export const sideHeaderTableData: TableData = {
    head: [],
    body: {
        headings: ['Jahr', 'Anzahl Bahnhöfe*', 'Anteil Reisender', 'Extra Heading 1', 'Extra Heading 2'],
        data: [
            ['2017', '2023', 'Nach 202'],
            ['335 BehiG-konform', '556 BehiG-konform', '93 Prozent'],
            ['358 Prozent', '679 BehiG-konform', '99 Prozent'],
            ['-', '-', '-'],
            ['Lorem', 'Ipsum', 'Dolor sit amet'],
        ],
    },
};

export const twoHeadersTableData: TableData = {
    head: ['Jahr', 'Anzahl Bahnhöfe*', 'Anteil Reisender', 'Extra Heading 1', 'Extra Heading 2'],
    body: {
        headings: ['2017', '2023', 'Nach 2023'],
        data: [
            ['335 BehiG-konform', '58 Prozent', '-', 'Lorem'],
            ['556 BehiG-konform', '93 Prozent', '-', 'Lorem'],
            ['679 BehiG-konform', '99 Prozent', '-', 'Lorem'],
        ],
    },
};

// export const tableData = {
//     columns: [
//         ['Jahr'],
//         ['Anzahl Bahnhöfe*'],
//         ['Anteil Reisender'],
//         ['Extra Heading 1'],
//         ['Extra Heading 2'],
//     ],
//     data: [
//         ['2017', '335 BehiG-konform', '58 Prozent', '-', 'Lorem'],
//         ['2023', '556 BehiG-konform', '93 Prozent', '-', 'Lorem'],
//         ['Nach 2023', '679 BehiG-konform', '99 Prozent', '-', 'Lorem'],
//     ],
// };

// export const sideHeaderTableData = {
//     rows: [
//         ['Jahr'],
//         ['Anzahl Bahnhöfe*'],
//         ['Anteil Reisender'],
//         ['Extra Heading 1'],
//         ['Extra Heading 2'],
//     ],
//     data: [
//         ['2017', '2023', 'Nach 202'],
//         ['335 BehiG-konform', '556 BehiG-konform', '93 Prozent'],
//         ['358 Prozent', '679 BehiG-konform', '99 Prozent'],
//         ['-', '-', '-'],
//         ['Lorem', 'Ipsum', 'Dolor sit amet'],
//     ],
// };

// export const twoHeadersTableData = {
//     columns: [
//         ['Jahr'],
//         ['Anzahl Bahnhöfe*'],
//         ['Anteil Reisender'],
//         ['Extra Heading 1'],
//         ['Extra Heading 2'],
//     ],
//     rows: [
//         ['2017'],
//         ['2023'],
//         ['Nach 2023'],
//     ],
//     data: [
//         ['335 BehiG-konform', '58 Prozent', '-', 'Lorem'],
//         ['556 BehiG-konform', '93 Prozent', '-', 'Lorem'],
//         ['679 BehiG-konform', '99 Prozent', '-', 'Lorem'],
//     ],
// };
