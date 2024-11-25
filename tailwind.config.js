import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0FF1F6",
        secondary: "#96ACAF",
        jungleGreen: "#002228",
        cyan: "#14BCB2",
      },
      backgroundColor: {
        primary: "#0FF1F6",
        jungleGreen: "#002228",
      },
      fontFamily: {
        Montserrat: "Montserrat",
        workSans: "Work Sans",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
