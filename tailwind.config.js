/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor: "#2C4E80",
        primaryColor: "#FC4100",
        secondaryColor: "#00215E",
        labelColor: "#FFC55A",
      },
    },
  },
  plugins: [],
};
