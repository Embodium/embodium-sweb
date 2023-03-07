/// <reference types="vitest" />

import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vite';

// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
    build: {
	outDir: 'lib',
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'key-processor',
            formats: ['es', 'cjs'],
            fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'}`,
        },
    },
    test: {
	include: ["test/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"]
    },
    plugins: [dts({
        outputDir: 'lib-types'
    })],
});
