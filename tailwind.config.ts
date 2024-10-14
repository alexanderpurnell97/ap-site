import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'footer-blue': '#669BBC',
        'footer-green': "#A8C686",
        'button-red': "#F44708",
        'header-green': "#293241"
      },
      fontFamily: {
        'jerseyfont':['Jersey 25', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
