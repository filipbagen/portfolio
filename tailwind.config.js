/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(180deg, #EDF2FF 0%, rgba(208, 224, 255, 0.60) 45%, rgba(255, 238, 249, 0.30) 90.5%)',
        'custom-gradient-experience':
          'linear-gradient(180deg, #EEF4FF 0%, rgba(255, 237, 248, 0.65) 100%)',
        'custom-gradient-projects':
          'linear-gradient(147deg, #E8F1FF 19.73%, rgba(255, 245, 235, 0.80) 50%, rgba(255, 224, 224, 0.27) 80.27%)',
      },
      boxShadow: {
        custom:
          '0px 0px 0px 1px rgba(100, 6, 69, 0.10), 0px 3px 6px 0px rgba(100, 6, 69, 0.12), 0px -4px 0px 0px rgba(100, 6, 69, 0.08) inset',
      },
    },
  },
  plugins: [],
};
