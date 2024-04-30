/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Oxanium: "Oxanium",
      Archivo_Narrow: "Archivo_Narrow",
      Inter: "Inter",
      Italianno: "Italianno",
      K2D: "K2D",
      Kalam: "Kalam",
      DancingScript: "DancingScript",
    },
    extend: {
      colors: {
        DarkTeal: "#51907D",
        Buttercup: "#F8C200",
        MangoTango: "#FDCC1A",
        CornSilk: "#FFE481",
        PeachPuff: "#FFE173",
        Goldenrod: "#FFD63F",
        ForestGreen: "#2F6F59",
        LightSeaGreen: "#2F8F6F",
        Charcoal: "#163A2E",
        MidnightBlue: "#001C13",
        PaleAqua: "#BDEFDE",
        SkyBlue: "#70CEB1",
        SunGold: "#FFC700",
        PaleTurquoise: "#A8E1E4",
        Teal: "#49A9AE",
        TealLite: "#0A9CA4",
        Peach: "#FFCDA7",
        LightSalmon: "#EEA874",
        PowderBlue: "#E2FBB2",
        LightGreen: "#B9DB75",
        Eggshell: "#CFE9E1"
      },
    },
  },
  plugins: [],
};
