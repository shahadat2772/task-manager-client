/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        task_manager: {
          primary: "#CCFFBD",
          secondary: "#7ECA9C",
          accent: "#40394A",
          neutral: "#1C1427",
          info: "#9C9C9C",
          error: "#F87272",
          warning: "#FBBD23",
          "base-100": "#ffffff",
        },
      },

      "light",
    ],
  },

  plugins: [require("daisyui")],
};
