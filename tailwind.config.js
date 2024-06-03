/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #EDF2FF 0%, rgba(208, 224, 255, 0.60) 45%, rgba(255, 238, 249, 0.30) 90.5%)',
      },
    },
  },
  plugins: [],
};
