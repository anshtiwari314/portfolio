/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#0c0c12',
          raised: '#13131c',
          card: '#1a1a26',
        },
        accent: {
          DEFAULT: '#ff7d3c',
          soft: '#ffb26b',
          purple: '#8b5cf6',
        },
      },
      fontFamily: {
        display: ['Outfit', 'system-ui', 'sans-serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(139,92,246,0.35), transparent), radial-gradient(ellipse 60% 40% at 90% 10%, rgba(255,125,60,0.2), transparent)',
        'card-shine':
          'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%)',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(255,125,60,0.4)',
        'glow-purple': '0 0 40px -10px rgba(139,92,246,0.4)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
