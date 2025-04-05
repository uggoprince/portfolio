/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // ✅ Add this
    "./src/components/**/*.{js,ts,jsx,tsx}", // ✅ Fix components path
    "./src/pages/**/*.{js,ts,jsx,tsx}", // ✅ Fix pages path
    "./node_modules/once-ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
