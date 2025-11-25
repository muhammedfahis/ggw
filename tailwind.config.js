/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2D5016",
        secondary: "#E8DCC4",
        accent: "#D4AF37",
        // Secondary colors
        deepEarth: "#3A2D1A",
        skyBlue: "#87CEEB",
        sunsetOrange: "#E07B39",
        // Neutral colors
        offWhite: "#FDFBF7",
        warmGray: "#F5F1E8",
        charcoal: "#2C2C2C",
        // Legacy for compatibility
        ggwGreen: "#2D5016",
        ggwBg: "#FDFBF7",
        ggwDark: "#2C2C2C",
        ggwAccent: "#D4AF37",
      },
      fontFamily: {
        heading: ["Playfair Display", "Cormorant", "Georgia", "serif"],
        body: ["Inter", "Satoshi", "Plus Jakarta Sans", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        accent: ["Archivo", "Space Grotesk", "Inter", "sans-serif"],
      },
      spacing: {
        '4px': '4px',
        '8px': '8px',
        '12px': '12px',
        '16px': '16px',
        '24px': '24px',
        '32px': '32px',
        '48px': '48px',
        '64px': '64px',
        '96px': '96px',
        '128px': '128px',
      },
      borderRadius: {
        'sm': '2px',
        'md': '4px',
        'lg': '8px',
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
      animation: {
        'fadeIn': 'fadeIn 0.6s ease-out',
        'slideUp': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
