/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#046645',
          50: '#E6F4EF',
          100: '#C2E4D4',
          200: '#85C9A9',
          300: '#48AE7E',
          400: '#0B9358',
          500: '#046645',
          600: '#035438',
          700: '#02432C',
          800: '#023120',
          900: '#012014'
        },
        accent: {
          DEFAULT: '#6366F1',
          50: '#EEEEFF',
          100: '#E0E1FE',
          200: '#C3C4FD',
          300: '#A6A8FC',
          400: '#898BFB',
          500: '#6366F1',
          600: '#4F52E9',
          700: '#3B3EE1',
          800: '#2729D9',
          900: '#1315D1'
        },
        background: {
          DEFAULT: '#FCFBFA',
          white: '#FFFFFF',
          muted: '#F1F3F5'
        },
        pastel: {
          green: '#E8F5E9',
          blue: '#E3F2FD',
          purple: '#EDE7F6',
          pink: '#FCE4EC',
          yellow: '#FFF8E1',
          orange: '#FFF3E0'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif']
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '24px',
        '3xl': '32px'
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 8px 40px rgba(0, 0, 0, 0.12)',
        'soft-xl': '0 12px 60px rgba(0, 0, 0, 0.16)',
        'card': '0 2px 12px rgba(4, 102, 69, 0.08)',
        'card-hover': '0 8px 30px rgba(4, 102, 69, 0.12)'
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'ticker': 'ticker 30s linear infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)'
      }
    }
  },
  plugins: []
};
