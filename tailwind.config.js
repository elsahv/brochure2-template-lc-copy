/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        onyx: "#35373d",
        parchment: "#f0ead2",
        test1: "pink",
        test2: "lightgreen",
        teal: "teal",
      },
    },
  },
  plugins: [],
};
