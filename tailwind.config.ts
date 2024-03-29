import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primarytheme: "#3F968C",
        primaryDark: "#273A37",
        secondrytheme: "#F39B42",
        mainText: "#0f1716",
        bgGray: "#f1f1f1",
      },
      screens: {
        mobile: "0px",
        bigScreen: "1700px",
      },
    },
  },
  plugins: [],
};
export default config;
