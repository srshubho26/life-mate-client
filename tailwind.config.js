import { content, plugin } from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    content()
  ],
  theme: {
    extend: {
      colors: {
        'text': '#160415',
        'text-dark': '#fbe9fa',
        'background': '#fceefb',
        'lite': '#fdf6fd',
        'background-dark': '#110310',
        'clear-dark': '#11031066',
        'primary': '#d833db',
        'primary-dark': '#c924cc',
        'secondary': '#ebb08e',
        'secondary-dark': '#713614',
        'accent': '#e2bb5a',
        'accent-deep': '#ebaa0a',
        'accent-dark': '#a57e1d'
       },
              
      fontFamily: {
        "playwrite": ["Playwrite AU SA", "serif"]
      }
    },
  },
  darkMode: 'class',
  plugins: [plugin()],
}