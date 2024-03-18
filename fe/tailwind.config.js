/* eslint-disable no-undef */

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
   themes: ["retro"],
 },
  plugins: [require("daisyui")],
};
