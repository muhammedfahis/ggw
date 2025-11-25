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
        secondary: "#D4A574",
        accent: "#9BA89F",
        neutral: "#F5F3F0",
        dark: "#2B2B2B",
        // Legacy for compatibility
        ggwGreen: "#2D5016",
        ggwBg: "#F5F3F0",
        ggwDark: "#2B2B2B",
        ggwAccent: "#D4A574",
      },
      fontFamily: {
        heading: ["Georgia", "Crimson Text", "serif"],
        body: ["Inter", "Poppins", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
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
      },
      borderRadius: {
        'sm': '2px',
        'md': '4px',
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
