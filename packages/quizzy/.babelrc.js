module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    esmodules: true,
                },
            },
        ],
        '@babel/preset-react',
        '@babel/preset-typescript',
    ],
    plugins: ['@babel/plugin-transform-react-jsx'],
};

// module.exports = {
//     presets: [
//         [
//             '@babel/preset-env',
//             {
//                 targets: {
//                     esmodules: true,
//                 },
//             },
//         ],
//     ],
// };
