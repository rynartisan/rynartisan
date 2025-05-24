import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

const isDev = process.env.NODE_ENV === 'development';

export default defineConfig({
  plugins: [sveltekit()],
  base: isDev ? '' : '/rynartisan',
});
