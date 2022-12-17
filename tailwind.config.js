/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'test01': "url('/img/test01.png')",
        'PointCount': "url('/img/PointCount.png')",
      },
      animation: {
        "text-shadow-pop-bl": "text-shadow-pop-bl 0.6s ease   both",
        "text-focus-in": "text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both",
        "kenburns-bottom": "kenburns-bottom 5s ease   both",
      },
      keyframes: {
        "text-shadow-pop-bl": {
            "0%": {
                "text-shadow": "0 0 #555, 0 0 #555, 0 0 #555, 0 0 #555, 0 0 #555, 0 0 #555, 0 0 #555, 0 0 #555",
                transform: "translateX(0) translateY(0)"
            },
            to: {
                "text-shadow": "-1px 1px #555, -2px 2px #555, -3px 3px #555, -4px 4px #555, -5px 5px #555, -6px 6px #555, -7px 7px #555, -8px 8px #555",
                transform: "translateX(8px) translateY(-8px)"
            },
        },
        "text-focus-in": {
          "0%": {
              filter: "blur(12px)",
              opacity: "0"
          },
          to: {
              filter: "blur(0)",
              opacity: "1"
          }
        },
        "kenburns-bottom": {
          "0%": {
              transform: "scale(1) translateY(0)",
              "transform-origin": "50% 84%"
          },
          to: {
              transform: "scale(1.25) translateY(15px)",
              "transform-origin": "top"
          }
        },
      }
    },
  },
  plugins: [],
}
