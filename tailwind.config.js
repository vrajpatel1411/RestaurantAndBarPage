/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "backg-image": "url('src/assets/bg.png')",
      },
      fontFamily: {
        base: [
          '"Cormorant Upright", "serif"',
          {
            fontFeatureSettings: '"tnum" on,"lnum" on',
          },
        ],
        alt: ["Open Sans", "sans-serif"],
      },
      letterSpacing: {
        tightest: "0.04em",
      },
      colors: {
        golden: "#dcca87",
        black: "#0c0c0c",
        gray: "#545454",
        crimson: "#f5efdb",
        grey: "#aaaaaa",
        white: "#ffffff",
      },
      keyframes: {
        transform1: {
          "0%": {
            transform: "translateX(100%)",
          },
          "50%": {
            transform: "translateX(50%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
        spin1: {
          "0%": {
            borderTop: "8px solid #3498db",
            transform: "rotate(0deg)",
          },
          "25%": {
            borderTop: "8px solid #3498db",
            borderRight: "8px solid #3498db",
            transform: "rotate(90deg)",
          },
          "50%": {
            borderTop: "8px solid #3498db",
            borderRight: "8px solid #3498db",
            borderBottom: "8px solid #3498db",
            transform: "rotate(180deg)",
          },
          "75%": {
            borderTop: "8px solid #3498db",
            borderRight: "8px solid #3498db",
            borderBottom: "8px solid #3498db",
            borderLeft: "8px solid #3498db",
            transform: "rotate(270deg)",
          },
          "100%": {
            borderTop: "8px solid #3498db",
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        "custom-menu": "transform1 .5s linear ",
        "custom-Loader": "spin1 4s linear infinite",
      },
    },
  },
  plugins: [],
};

// font-weight: 400;
//     letter-spacing: 0.04em;
//     text-transform: capitalize;
//     line-height: 28px;
//     font-size: 16px;
