import formsPlugin from '@tailwindcss/forms'


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans : ["IRANYekanX"],
      }
    },
  },
  plugins: [formsPlugin],
}