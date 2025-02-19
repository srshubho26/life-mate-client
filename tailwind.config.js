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
        'lite': '#f9f9f9',
        'clear-lite': '#fff6ffeb',
        'background-dark': '#202020',
        'lite-dark': '#171717',
        'clear-dark': '#110310d4',
        'primary': '#d833db',
        'primary-dark': '#c924cc',
        'secondary': '#ebb08e',
        'secondary-dark': '#713614',
        'accent': '#e2bb5a',
        'accent-deep': '#ebaa0a',
        'accent-dark': '#a57e1d',
        'line': '#ffafff',
        'element': '#f9f0f9',
       },
              
      fontFamily: {
        "playwrite": ["Playwrite AU SA", "serif"]
      }
    },
  },
  darkMode: 'class',
  plugins: [plugin()],
}