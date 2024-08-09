import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Albert Sans', 'sans-serif'], 
        signature: ['TheSignature', 'cursive'], 
        unbounded: ['Unbounded', 'sans-serif'],
      },
      colors: {
        gold: '#D6B66B',
        cream: '#FAF9F5',
        teal: '#0B7373',
        darkTeal: '#004040',
        black: '#000000',
        gray: '#B8B8B8',
      },
      backgroundColor: {
        gold: '#D6B66B',
        black: '#000000',
        teal: '#0B7373',
        darkTeal: '#004040',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
