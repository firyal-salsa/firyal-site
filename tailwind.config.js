/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'glow': '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #f0f, 0 0 70px #f0f, 0 0 80px #f0f, 0 0 100px #f0f',
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
