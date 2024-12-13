/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#002d85",
        },
        yellow: {
          100: "#ffbe2e",
        },
        gray: {
          100: "#828282",
          200: "#4f4f4f"
        }
      }
    },
  },
  plugins: [],
}