import { bootstrap } from 'sonolus-wiki-theme'

export default bootstrap({
    base: '/sonolus.js-guide/',

    prism: ['ts', 'js', 'json', 'bash'],
    code: {
        languages: ['TS', 'JS'],
        path: {
            template:
                'https://github.com/Sonolus/wiki-sonolus.js-guide-code/blob/',
            params: [
                ['ts', 'ts'],
                ['js', 'mjs'],
            ],
        },
    },
})
