import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import postcssConfig from './postcss.config.ts';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss({ config: './tailwind.config.ts' }), // Pass the custom Tailwind config
        autoprefixer,
        ...postcssConfig.plugins, // Spread in the plugins from PostCSS config
      ],
    },
  },
});
