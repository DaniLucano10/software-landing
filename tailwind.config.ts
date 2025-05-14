import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',    // azul
        secondary: '#9333EA',  // morado
        accent: '#F59E0B',     // amarillo
        dark: '#111827',       // gris oscuro
        light: '#F3F4F6',      // gris claro
      },
    },
  },
  plugins: [],
};

export default config;
