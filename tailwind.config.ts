export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          stylish: "Stylish",
          raleway: "Raleway",
          pacifico: "Pacifico",
          ebGaramond: "EB Garamond",
          lato: "Lato",
          inter: "Inter",
        },
  
        fontSize: {
          10: "0.625rem",
          12: "0.75rem",
          14: "0.875rem",
          16: "1rem",
          20: "1.25rem",
          24: "1.5rem",
          35: "2.1875rem",
          50: "3.125rem",
          64: "4rem",
        },
  
        colors: {
          amarelo: "#E6C744",
          branco: "#FFFFFF",
          preto: "#000000",
          'azul-claro': "#C2C8DA",
        }
    },
  },
  plugins: [],
};