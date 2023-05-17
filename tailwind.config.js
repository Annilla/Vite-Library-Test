/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./lib/**/*.{js,svelte}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    corePlugins: [
        'backgroundColor',
        'width'
    ],
    prefix: 'annylib-'
}