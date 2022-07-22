const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./components/*.jsx', './pages/index.jsx'],
    theme: {
        screens: {
            xs: '420px',
            ...defaultTheme.screens,
        },
        extend: {
            colors: {
                'off-white': '#EDF6F9',
                'gray-light': '#BDBDBD',
                primary: {
                    DEFAULT: '#6495ED',
                    dark: '#132246',
                    light: '#ABD7EE',
                    darker: '#0F1A35',
                },
                'pink-light': '#FFB0EE',
                'red-orange': '#E29578',
            },
            keyframes: {
                spinDots: {
                    '0%': { transform: 'rotate(0deg)' },
                    '50%, 100%': { transform: 'rotate(180deg)' },
                },
                onOff: {
                    '0%, 49%': { opacity: '0' },
                    '50%, 100%': { opacity: '1' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeOut: {
                    '0%': { opacity: '1' },
                    '100%': { opacity: '0' },
                },
                translateIn: {
                    '0%': { transform: 'translateY(-40px)', marginTop: '40px' },
                    '100%': { transform: 'translateY(0)', marginTop: '0' },
                },
            },
            animation: {
                translateIn: 'translateIn 800ms ease-in',
                fadeOut: 'fadeOut 300ms ease-in',
                fadeIn: 'fadeIn 800ms ease-in',
                spinDots:
                    'spinDots 2s cubic-bezier(.52,-0.75,.75,.23) infinite',
                spinDotsReverse:
                    'spinDots 2s cubic-bezier(.52,-0.75,.75,.23) infinite reverse',
                onOff: 'onOff 2s cubic-bezier(.52,-0.75,.75,.23) infinite',
                onOffReverse:
                    'onOff 2s cubic-bezier(.52,-0.75,.75,.23) infinite reverse',
            },
        },
        fontFamily: {
            serifCustom: ['Roboto', 'sans-serif'],
            monoCustom: ['Source Code Pro', 'monospace'],
            rampart: ['Rampart One', 'cursive'],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
