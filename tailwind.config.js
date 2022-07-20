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
                    light: '#ABD7EE' 
                },
                'pink-light': '#FFB0EE',
                'red-orange': '#E29578',
            },
        },
        fontFamily: {
            serifCustom: ['Roboto', 'sans-serif'],
            monoCustom: ['Source Code Pro', 'monospace'],
            audiowide: 'Audiowide', cursive;
            cinzel: 'Cinzel Decorative', cursive;
            gruppo: 'Gruppo', cursive;
            limelight: 'Limelight', cursive;
            monoton: 'Monoton', cursive;
            poiret: 'Poiret One', cursive;
            pressStart: 'Press Start 2P', cursive;
            rampart: 'Rampart One', cursive;
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
