import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        inconsolata: ['Inconsolata Go Nerd Font'],
        'inconsolata-mono': ['Inconsolata Go Nerd Font Mono'],
        'inconsolata-propo': ['Inconsolata Go Nerd Font Propo'],
      },
    },
  },

  plugins: [],
} as Config;
