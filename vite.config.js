import path from 'path'
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
    plugins: [svelte()],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'lib/main.js'),
            name: 'annyLib',
            fileName: (format) => `annyLib.${format}.js`
        },
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name === 'style.css') return 'annyLib.css';
                    return assetInfo.name;
                },
            },
        },
    },
});