const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    //force desktop first
    screens: {
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1440px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "1098px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "980px" },
      // => @media (max-width: 639px) { ... }
      xsm: { max: "840px" },
      xxs: { max: "702px" },
    },

    letterSpacing: {
      smallText: "-.075em",
    },
    //custom font
    fontFamily: {
      inter: ["Inter"],
      Monument: ["Monument"],
    },
    //fontsize with line-height
    fontSize: {
      size16: ["16px", "20px"],
      size20: ["20px", "24px"],
      size24: ["24px", "28px"],
      size216: ["216px"],
    },

    extend: {
      colors: {
        smokedClaret: "#593C39",
        diamondsTherapy: "#EAE7E1",
        herbes: "#ABA385",
        cedar: "#402019",
        tan: "#90521A",
        dark: "#090909",
      },

      spacing: {
        spacing1: "300px",
      },
      margin: {
        "40px": "40px",
        "80px": "80px",
      },
    },
  },

  plugins: [],
};

module.exports = config;
