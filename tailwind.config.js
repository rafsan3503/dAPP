/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      diplomatic: ["Diplomata SC", "cursive"],
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
