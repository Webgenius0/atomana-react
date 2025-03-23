/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#024040',
        secondPrimary: '#333',
        background: '#333',
        secondary: '#808080',
        dark: '#151515',
        light: '#fff',
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        Inria: ['Inria Serif', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
