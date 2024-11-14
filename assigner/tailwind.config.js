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
        240: "240px",
        733.78: "733.78px",
        270: "270px",
        858: "858px",
      },
      height: {
        96: "96px",
        47: "47px",
        503: "503px",
        38.22: "38.22px",
        19: "19px",
        40.24: "40.24px",
        121: "121px",
        221: "221px",
        300: "300px",
        760: "760px",
        350: "350px",
      },
      colors: {
        customGrey: "#F5F5F5",
        customPurple: "#641566",
        customGray: "#C9C9C9",
        customWhite: "#FFFFFF",
        customPurple1: "#583781",
        customPurple2: "#5A156B",
        customLightPurple: "#A259FF",
        customPurple3: "#9F0D76",
        customBlack: "#000000",
        customBlack1: " #2E2E3B",
        customVoilet: "#C414681A",
        customWheat: "#EE481447",
        customWhite1: "#EEEEEE",
        customVoilet1: "#BA4396",
        customPurple4: "#891993",
        customPink: "#E52FDE",
      },
      fontFamily: {
        robot: "Cormorant",
      },
      fontSize: {
        16: "16px",
        15: "15px",
        48: "48px",
      },
      lineHeight: {
        19.38: "19.38px",
        18.17: "18.17px",
      },
      boxShadow: {
        customLight: "0px 4px 4px 0px #00000040",
        customShadow: "0px 8px 16px 0px #00000033",
        customShadow1: "0px 2px 5px 0px #00000040",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(257.29deg, rgba(153, 124, 152, 0.6) 6.5%, #FFFFFF 18.5%, rgba(159, 13, 118, 0.27) 41%, #FFFFFF 77.5%, rgba(153, 124, 152, 0.4) 90.5%)",
      },
    },
  },
  plugins: [],
};
