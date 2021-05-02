const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1158px",
      },
    },

    extend: {
      fontFamily: {
        sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
      },

      backgroundImage: {
        heroPattern: "url('/assets/img/minicabit+road.jpg')",
        filterToggle: "url('/assets/svg/off.svg')",
        arrowBottom: "url('/assets/svg/arrow-red.svg')",
      },

      backgroundSize: {
        10: "10px",
      },

      borderWidth: {
        3: "3px",
      },

      height: {
        "screen-70": "70vh",
        "screen-74": "74vh",
        211: "211px",
      },

      flexGrow: {
        2: 2,
        3: 3,
      },

      width: {
        30: "7.5rem",
        18.5: "75px",
        34: "8.5rem",
        73: "18.25rem",
        75: "18.75rem",
        411: "411px",
        rest: "calc(100% - 411px)",
        fit: "fit-content",
        "-px": "calc(100% - 1.75rem)",
      },

      margin: {
        4.5: "18px",
        "-294": "-294px",
        "-302": "-302px",
      },

      padding: {
        0.75: "3px",
        0.6: "5px",
        2.25: "9px",
        2.625: "10.5px",
      },

      left: {
        "-11px": "-11px",
      },

      top: {
        "-30": "-30px",
      },

      zIndex: {
        "-10": "-10",
        "-20": "-20",
        "-30": "-30",
      },
      fontSize: {
        8: "8px",
        10: "10px",
        11: "11px",
        12: "12px",
        13: "13px",
        14: "14px",
        15: "15px",
        16: "16px",
        17: "17px",
        18: "18px",
        19: "19px",
        20: "20px",
        21: "21px",
        24: "24px",
        28: "28px",
        32: "32px",
      },
      colors: {
        mGray: {
          50: "#F4F7FA",
          100: "#EFEFEF",
          150: "#DEDEDE",
          200: "#D3D3D3",
          220: "#CCCCCC",
          240: "#CCD5E3",
          250: "#BEBEBE",
          300: "#B2B2B2",
          400: "#A2A2A2",
          500: "#7F7F7F",
          600: "#787878",
          700: "#4B4B4B",
          800: "#2B2B2B",
          900: "#1A1A1A",
        },
        mYellow: {
          200: "#FFF8C1",
          500: "#FFEB00",
        },
        mRed: {
          500: "#EA1300",
          700: "#A30000",
          705: "#A30005",
        },
        mBlue: {
          200: "#68C2F5",
          300: "#7386A7",
          500: "#263754",
          505: "#1F7BDC",
          510: "#1D006C",
          520: "#515F76",
          530: "#013D8E",
          540: "#036B98",
          545: "#3D5A8B",
          550: "#3B609A",
        },
        mGreen: {
          400: "#5DD6A8",
          500: "#2AAD85",
          700: "#078853",
          800: "#004831",
          900: "#00633B",
          950: "#00724F",
        },
        mPink: {
          400: "#BB3250",
          800: "#571A27",
        },
      },
    },
  },
  variants: {
    extend: {
      margin: ["last", "first"],
      borderWidth: ["last", "first"],
      padding: ["first", "last"],
    },
  },
  corePlugins: {
    appearance: false,
  },
  plugins: [require("@tailwindcss/forms")],
};
