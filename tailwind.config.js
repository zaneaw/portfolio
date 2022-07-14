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
                blue: { 
                    DEFAULT: '#006d77', 
                    dark: '#00363B', 
                    light: '#83C5BE' 
                },
                'light-pink': '#FFDDD2',
                'red-orange': '#E29578',
            },
        },
        fontFamily: {
            roboto: ['Roboto', 'sans-serif'],
            notoSans: ['Noto Sans', 'sans-serif'],
            firaCode: ['Fira Code', 'monospace'],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
