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
                'primary': { 
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
                    '0%': { transform: 'rotate(0deg)'},
                    '50%, 100%': { transform: 'rotate(180deg)'},
                },
                onOff: {
                    '0%, 49%': { opacity: '0'},
                    '50%, 100%': { opacity: '1'},
                },
            },
            animation: {
                spinDots: 'spinDots 2s cubic-bezier(.52,-0.75,.75,.23) infinite',
                spinDotsReverse: 'spinDots 2s cubic-bezier(.52,-0.75,.75,.23) infinite reverse',
                onOff: 'onOff 2s cubic-bezier(.52,-0.75,.75,.23) infinite',
                onOffReverse: 'onOff 2s cubic-bezier(.52,-0.75,.75,.23) infinite reverse',
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
