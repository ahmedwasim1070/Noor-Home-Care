/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#432E54",
        secondaryColor: "#E4508F",
      },
    },
  },
  plugins: [],
};
