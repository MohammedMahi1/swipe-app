import { useColorScheme } from 'react-native';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './screens/**/*.{js,ts,tsx}',
    './navigation/**/*.{js,ts,tsx}',
  ],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors:{
        "primary":"#121212",
        "secondary":"#B4B4B4",
      }
    },
    
  },
  plugins: [],
};
