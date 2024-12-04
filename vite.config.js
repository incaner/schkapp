import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
  plugins: [sveltekit({ hot: !process.env.VITEST })],

  test: {
    environment: 'jsdom',
    reporters: ['junit', 'verbose'],
    outputFile: {
      junit: './junit-report.xml',
    },
  }
});