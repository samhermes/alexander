import { dirname, resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		lib: {
			entry: resolve(import.meta.dirname, 'src/js/index.js'),
			name: 'Alexander',
			fileName: 'alexander',
		},
	},
});