import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { execSync } from 'child_process';

const isDev = process.env.NODE_ENV === 'development';

const lastUpdated = execSync('git log -1 --format=%cd').toString().trim();

export default defineConfig({
  plugins: [sveltekit()],
  base: isDev ? '' : '/rynartisan',
  define: {
    __LAST_UPDATED__: JSON.stringify(lastUpdated),
  },
});
