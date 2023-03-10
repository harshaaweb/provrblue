/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {},
  },
  // set daisyui plugin with black theme
  plugins: [
    require("daisyui"),
    {
      daisyui: {
        themes: ["dark"],
      },
    },
  ],
};
