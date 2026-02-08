import { defineConfig } from 'vite';

export default defineConfig({
    root: './',
    base: '/aussie-automation/',
    publicDir: 'public',
    build: {
        outDir: 'dist',
    },
    server: {
        port: 3000,
    }
});
