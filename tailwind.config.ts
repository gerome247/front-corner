/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx}", // Adjust for Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // For Pages Router
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {},
  plugins: [],
});
