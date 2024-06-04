/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(180deg, #EDF2FF 0%, rgba(208, 224, 255, 0.60) 45%, rgba(255, 238, 249, 0.30) 90.5%)',
        'custom-gradient-dark':
          'linear-gradient(180deg, #202531 0%, rgba(51, 46, 71, 0.60) 45%, rgba(54, 64, 85, 0.10) 100%)',
        'custom-gradient-experience':
          'linear-gradient(180deg, #EEF4FF 0%, rgba(255, 237, 248, 0.65) 100%)',
        'custom-gradient-experience-dark':
          'linear-gradient(180deg, rgba(51, 34, 57, 0.20) 0%, rgba(65, 33, 33, 0.20) 51%, rgba(32, 24, 55, 0.14) 100%);',
        'custom-gradient-projects':
          'linear-gradient(147deg, #E8F1FF 19.73%, rgba(255, 245, 235, 0.80) 50%, rgba(255, 224, 224, 0.27) 80.27%)',
        'custom-gradient-projects-dark':
          'linear-gradient(180deg, rgba(36, 60, 57, 0.20) 0%, rgba(54, 102, 105, 0.20) 55.77%, rgba(42, 48, 54, 0.20) 90%);',
        'custom-gradient-skills':
          'linear-gradient(180deg, #FFEBF9 0%, rgba(255, 235, 249, 0.00) 100%)',
        'custom-gradient-skills-dark':
          'linear-gradient(180deg, #262B36 0%, rgba(59, 44, 66, 0.00) 100%)',
        'custom-gradient-footer':
          'linear-gradient(0deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%), linear-gradient(90deg, #FFF2EB 0%, #FFEBFC 50%, #E0EDFF 100%)',
        'custom-gradient-footer-dark':
          'linear-gradient(0deg, #1a202c 0%, rgba(26, 32, 44, 0.00) 100%), linear-gradient(#202838, #47263c 49.58%, #56512c)',
      },
      boxShadow: {
        custom:
          '0px 0px 0px 1px rgba(100, 6, 69, 0.10), 0px 3px 6px 0px rgba(100, 6, 69, 0.12), 0px -4px 0px 0px rgba(100, 6, 69, 0.08) inset',
        customDark:
          '0px 0px 0px 1px rgba(26, 32, 44, 0.10), 0px 3px 6px 0px rgba(26, 32, 44, 0.12), 0px -4px 0px 0px rgba(26, 32, 44, 0.08) inset',
      },
      colors: {
        // Add your dark mode color variables
        'custom-dark': '#1a202c',
        'custom-dark-bg': '#2d3748',
        'custom-dark-text': '#a0aec0',
      },
    },
  },
  plugins: [],
};
