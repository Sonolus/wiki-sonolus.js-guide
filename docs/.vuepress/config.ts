import { bootstrap } from 'sonolus-wiki-theme'

export default bootstrap({
    base: '/sonolus.js-guide/',

    prism: ['ts', 'js', 'json', 'bash'],
    code: {
        codeLanguages: ['TS', 'JS'],
        codePathTemplate:
            'https://github.com/Sonolus/wiki-sonolus.js-guide-code/blob/',
        codePathParams: [
            ['ts', 'ts'],
            ['js', 'mjs'],
        ],
    },
})
