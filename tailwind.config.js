/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-black': '#000000',
        'electric-purple': '#8B00FF',
        'electric-purple-dark': '#6B00FF',
        'neon-purple': '#B026FF',
        'purple-glow': 'rgba(139, 0, 255, 0.5)',
      },
      backgroundImage: {
        'purple-gradient': 'linear-gradient(135deg, #8B00FF 0%, #6B00FF 50%, #B026FF 100%)',
        'dark-gradient': 'linear-gradient(180deg, #000000 0%, #1a001a 100%)',
        'glow-gradient': 'radial-gradient(circle, rgba(139,0,255,0.3) 0%, transparent 70%)',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(139, 0, 255, 0.5), 0 0 40px rgba(139, 0, 255, 0.3)',
        'neon-lg': '0 0 30px rgba(139, 0, 255, 0.7), 0 0 60px rgba(139, 0, 255, 0.5)',
        'purple-glow': '0 10px 50px rgba(139, 0, 255, 0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glitch': 'glitch 1s linear infinite',
        'particle': 'particle 20s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 20px rgba(139, 0, 255, 0.5)' },
          'to': { boxShadow: '0 0 30px rgba(139, 0, 255, 0.8), 0 0 40px rgba(176, 38, 255, 0.6)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        particle: {
          '0%': { transform: 'translateY(0) translateX(0) scale(1)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100vh) translateX(100px) scale(0)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
