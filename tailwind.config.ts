import type { Config } from 'tailwindcss';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light Theme - Teal/Cyan Aesthetic
        retro: {
          primary: '#0d9488',      // Teal 600
          secondary: '#14b8a6',    // Teal 500
          background: '#f0fdfa',   // Teal 50
          surface: '#ccfbf1',      // Teal 100
          text: '#134e4a',         // Teal 900
          accent: '#06b6d4',       // Cyan 500
          border: '#5eead4',       // Teal 300
          shadow: '#2dd4bf',       // Teal 400
        },
        // Dark Theme - Gold/Black
        gold: {
          primary: '#c8b69e',      // Gold
          secondary: '#a0907e',    // Darker Gold
          background: '#0d0d0d',   // Deep Black
          surface: '#1f1f1f',      // Dark Gray Surface
          text: '#e6dcc8',         // Light Beige
          accent: '#d4c5ae',       // Bright Gold
          border: '#4a443a',       // Dark Brown/Gold Border
          glow: '#5e5646',         // Gold Glow
        },
      },
      fontFamily: {
        retro: ['"Press Start 2P"', 'monospace'],
        mono: ['"VT323"', '"Courier Prime"', 'monospace'],
        gold: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'scanline': 'scanline 8s linear infinite',
        'glitch': 'glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite',
        'pixel-fade': 'pixelFade 0.4s ease-in-out',
        'crt-flicker': 'crtFlicker 0.15s infinite',
        'float': 'float 3s ease-in-out infinite',
        'tech-in': 'techIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) backwards', 
        'tech-slide': 'techSlide 0.4s cubic-bezier(0.16, 1, 0.3, 1) backwards',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100vh)' }
        },
        techIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        techSlide: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' }
        },
        pixelFade: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        crtFlicker: {
          '0%': { opacity: '0.97' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0.97' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      boxShadow: {
        'retro': '4px 4px 0px 0px rgba(0, 0, 0, 0.25)',
        'retro-hover': '6px 6px 0px 0px rgba(0, 0, 0, 0.25)',
        'gold': '0 0 20px rgba(200, 182, 158, 0.3)',
        'gold-glow': '0 0 30px rgba(0, 255, 65, 0.5)',
      },
      borderWidth: {
        '3': '3px',
        '5': '5px',
      },
    },
  },
  plugins: [],
} satisfies Config;
