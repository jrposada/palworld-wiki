// Looks like Vite Express is not reading this file. Moved config to main.ts.
// This file is here for documentation purposes.

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/not-default',
    plugins: [react()],
});
