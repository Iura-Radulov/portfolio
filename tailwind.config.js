module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Design tokens shared across the whole site (header, footer, sections).
        ink: '#05070d', // page background
        surface: '#0b0f1c', // header / footer glass surface
        'surface-light': '#131a2c',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, #6366f1 0%, #8b5cf6 50%, #22d3ee 100%)',
      },
      boxShadow: {
        glow: '0 0 25px -5px rgba(99, 102, 241, 0.45)',
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(-8px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInDown: 'fadeInDown 0.2s ease-out',
      },
    },
  },
  plugins: [],
};
