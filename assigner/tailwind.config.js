/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Add .jsx, .ts, and .tsx for React components
  ],
  theme: {
    extend: {
      width: {
        249: "249px",
        759: "759px",
        274: "274px",
        61: "61px",
        81: "81px",
        87: "87px",
        71: "71px",
        139.6: "139.6px",
      },
      height: {
        96: "96px",
        47: "47px",
        503: "503px",
        38.22: "38.22px",
        19: "19px",
        40.24: "40.24px",
      },
      colors: {
        customGrey: "#F5F5F5",
        customPurple: "#641566",
        customGray: "#C9C9C9",
        customWhite: "#FFFFFF",
        customPurple1: "#583781",
      },
      fontFamily: {
        robot: "Cormorant",
      },
      fontSize: {
        16: "16px",
        15: "15px",
      },
      lineHeight: {
        19.38: "19.38px",
        18.17: "18.17px",
      },
      boxShadow: {
        customLight: "0px 4px 4px 0px #00000040",
      },
    },
  },
  plugins: [],
};
