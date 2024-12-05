import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit({ hot: !process.env.VITEST })],

  test: {
    environment: 'jsdom',
  }
});