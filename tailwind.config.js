/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(180deg, #EDF2FF 0%, rgba(208, 224, 255, 0.60) 45%, rgba(255, 238, 249, 0.30) 90.5%)',
      },
      boxShadow: {
        custom:
          '0px 0px 0px 1px rgba(100, 6, 69, 0.10), 0px 3px 6px 0px rgba(100, 6, 69, 0.12), 0px -4px 0px 0px rgba(100, 6, 69, 0.08) inset',
      },
    },
  },
  plugins: [],
};
