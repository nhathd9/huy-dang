import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'royal-blue': '#265bed',
      'card': 'rgb(9, 9, 46, 0.8)',
      'gray': 'rgb(140, 140, 140)',

    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        fadeIn: {
          '0%': {opacity: '0'},
          '100%': {opacity: '1'}
        },

        translateYDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-50%)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
          translateXLeft: {
            '0%': {
              opacity: '0',
              transform: 'translateX(20px)'
            },
            '100%': {
              opacity: '1',
              transform: 'translateX(0)'
            },
        },
        translateXRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-50%)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
      },
      },

      animation: {
        'hero-animate': 'fadeIn 1s ease-out',
        'translateYDown': 'translateYDown ease-out',
        'translateXLeft': 'translateXLeft ease-out',
        'translateXRight': 'translateXRight ease-out',
      }
    },
  },
  plugins: [],
};
export default config;
