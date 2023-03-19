import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@layouts': path.resolve(__dirname, './src/layouts'),
			'@components': path.resolve(__dirname, './src/components'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@features': path.resolve(__dirname, './src/features'),
			'@store': path.resolve(__dirname, './src/store'),
		},
	},
	plugins: [react()],
});
