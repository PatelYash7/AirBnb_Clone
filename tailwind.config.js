/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors:{
        "black":"var( --black)",
        "grey":"var(--grey)",
        "font-grey":"var(--font-grey)",
        "white":"var(--white)",
        "theme":"var( --theme)",
        "light-grey":"var(--light-grey)"

      },
      fontFamily:{
      
      },
      boxShadow:{
        "1": "0px 1px 2px rgb(0 0 0/8%),0 4px 12px rgb(0 0 0/5%)",
        "2": "0px 1px 2px rgb(0 0 0/15%),0 4px 12px rgb(0 0 0/10%)"
      },
      important: true,
      screens:{
        "tab":"800px",
        "mob":"460px",
        "mini":"375px"
      },
      
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

