import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}'],
  plugins: [require('@tailwindcss/forms')],
};

export default config;