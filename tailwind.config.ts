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
      },
      animation: {
        'imgAnimation': '2s ease 3s 1 normal forwards'
        },
      keyframes: {
        imgAnimation: {
          '0%': { transform: 'scaleX(0)', transformOrigin: '100% 100%' },
          '100%': { transform: 'scaleX(1)', transformOrigin: '100% 100%' },
        }
      }

    },
  },
  plugins: [],
};
export default config;
