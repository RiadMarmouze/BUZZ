import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-pink": {
          100: "#ffe6f2", // lightest
          200: "#ffb3cc",
          300: "#ff80a6",
          400: "#ff4d80",
          500: "#ff0066", // base color
          600: "#cc0052",
          700: "#99003d",
          800: "#660029",
          900: "#330014", // darkest
        },

        "header-bg-primary-light": "#ff0066",
        "header-bg-secondary-light": "#ffffff",
        "body-bg-primary-light": "#ffffff",
        "body-bg-secondary-light": "#ffffff",
        "footer-bg-primary-light": "#ff0066",
        "footer-bg-secondary-light": "#ffffff",

        "header-bg-primary-dark": "#000000",
        "header-bg-secondary-dark": "#000000",
        "body-bg-primary-dark": "#000000",
        "body-bg-secondary-dark": "#000000",
        "footer-bg-primary-dark": "#000000",
        "footer-bg-secondary-dark": "#000000",

        "header-title1-text-light": "#000000",
        "body-title1-text-light": "#000000",

        "footer-title1-text-light": "#ffffff",
        "footer-title1-text-dark": "#000000",
      },
      boxShadow: {
        "inner-custom": "inset 0px 0px 20px 0px rgba(0, 0, 0, 0.08)",
      },

      keyframes: {
        scrollRight: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-75%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        scrollRight: "scrollRight 60s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
