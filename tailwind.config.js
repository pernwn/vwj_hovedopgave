/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  mode: "jit",

  theme: {
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },

    extend: {
      backgroundImage: {
        heroimg: "url('/heroimg.jpeg')",
        "gradient-tr":
          "linear-gradient(to top right, #003cee, #002699, #001966)",
        "gradient-bl":
          "linear-gradient(to bottom left,#003cee, #002699, #001966)",
      },

      colors: {
        cmdark: "#021C30",
        cmwhite: "#f5f5f5",
        cmprimary: "#003cee",
        cmsecondary: "#86bae2",
        cmaccent: "#ff7755",
        current: "currentColor",
      },

      fontSize: {
        sm: "0.750rem",
        p: "1rem",
        h5: "1.333rem",
        h4: "1.777rem",
        h3: "2.369rem",
        h2: "3.158rem",
        h1: "4.210rem",
        '2xl':"5rem"
      },

      dropShadow: {
        sm: "4px 12px 12px #021C30",
      },

      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },

      animation: {
        "marquee-slower": "marquee 30s linear infinite",
        marquee: "marquee 27s linear infinite",
        "marquee-faster": "marquee 15s linear infinite",
        "scroll-slower": "scroll 15s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        
        
      },
    },
  },
  plugins: [],
};



        // Button co