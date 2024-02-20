/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1330px',
    },
    extend: {
      colors: {
        primary: '#272C33',
        secondary: '#858585',
        semiBlack: '#333333',
        white: '#FFFFFF',
        black: '#000000',
        blue: '#2CA9BC',
        grey: '#f8f8f8',
        
      },
      fontFamily: {
        primary: 'Poppins',
        secondary: 'SFProDisplay',
      },
      backgroundImage: {
        hero: 'url(../../assets/sampah.jpg)',
        second: 'url(../../assets/sampah-2.jpg)',
        third: 'url(../../assets/sampah-3.jpg)',
      },
      keyframes: {
        wave: {
          to:{
            "margin-left" : "-19%"
          }
        }
      },
      animation: {
        wave: "wave 1.5s ease-in-out infinite"
      }
    },
    plugins: []
  }
};
