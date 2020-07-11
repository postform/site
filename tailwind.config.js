const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    // purge: ['./src/*.njk', './src/**/*.njk', './src/assets/js/*.js', './src/assets/js/**/*.js'],
    theme: {
        container: {
            center: true,
        },
        fontFamily: {
            sans: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
            mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono],
        },
        fontSize: {
            xs: 'var(--step--2)',
            sm: 'var(--step--1)',
            base: 'var(--step-0)',
            lg: 'var(--step-1)',
            xl: 'var(--step-2)',
            '2xl': 'var(--step-3)',
            '3xl': 'var(--step-4)',
            '4xl': 'var(--step-5)',
            '5xl': 'var(--step-6)',
            '6xl': 'var(--step-7)',
        },
        boxShadow: {
            default: '0 0.1rem 0.2rem rgba(0, 0, 0, 0.05), 0 0.2rem 0.4rem rgba(0, 0, 0, 0.05)',
            md:
                '0 0.1rem 0.2rem rgba(0, 0, 0, 0.05), 0 0.2rem 0.4rem rgba(0, 0, 0, 0.05), 0 0.4rem 0.6rem rgba(0, 0, 0, 0.05)',
            lg:
                '0 0.2rem 0.4rem rgba(0, 0, 0, 0.05), 0 0.4rem 0.6rem rgba(0, 0, 0, 0.05), 0 0.6rem 1rem rgba(0, 0, 0, 0.05)',
            xl:
                '0 0.2rem 0.4rem rgba(0, 0, 0, 0.05), 0 0.6rem 0.8rem rgba(0, 0, 0, 0.05), 0 0.8rem 1.2rem rgba(0, 0, 0, 0.05), 0 1rem 1.6rem rgba(0, 0, 0, 0.05)',
            '2xl':
                '0 0.4rem 0.6rem rgba(0, 0, 0, 0.05), 0 0.8rem 1rem rgba(0, 0, 0, 0.05), 0 1rem 1.4rem rgba(0, 0, 0, 0.05), 0 1.2rem 2rem rgba(0, 0, 0, 0.05), 0 1.4rem 2.2rem rgba(0, 0, 0, 0.05)',
        },
        extend: {
            colors: {
                brand: {
                    100: '#E8E9EC',
                    200: '#C6C9D1',
                    300: '#A4A8B5',
                    400: '#60677D',
                    500: '#1C2645',
                    600: '#19223E',
                    700: '#111729',
                    800: '#0D111F',
                    900: '#080B15',
                },
                accent: {
                    100: '#FCECEF',
                    200: '#F8CFD6',
                    300: '#F4B2BD',
                    400: '#EC788C',
                    500: '#E43E5A',
                    600: '#CD3851',
                    700: '#892536',
                    800: '#671C29',
                    900: '#44131B',
                },
                gray: {
                    '900': '#080b14',
                    '800': '#151924',
                    '700': '#272b39',
                    '600': '#4f5465',
                    '500': '#828798',
                    '400': '#9da4b9',
                    '300': '#cdd3e3',
                    '200': '#e1e5ef',
                    '100': '#eaedf4',
                },
                green: {
                    '900': '#1e412d',
                    '800': '#1d5535',
                    '700': '#1b693c',
                    '600': '#1f8e4e',
                    '500': '#1fb960',
                    '400': '#35d578',
                    '300': '#60e096',
                    '200': '#93e8b7',
                    '100': '#c0f2d5',
                },
                red: {
                    '900': '#4e2c28',
                    '800': '#692c24',
                    '700': '#913327',
                    '600': '#b73626',
                    '500': '#de3e29',
                    '400': '#e55e4c',
                    '300': '#e37b6d',
                    '200': '#f2b2a9',
                    '100': '#f7e1de',
                },
                blue: {
                    '900': '#0f182f',
                    '800': '#0d1c41',
                    '700': '#112a69',
                    '600': '#153891',
                    '500': '#1c4ac1',
                    '400': '#2b5cd9',
                    '300': '#4f7bed',
                    '200': '#9eb7f8',
                    '100': '#d2ddfc',
                },
            },
        },
    },
};
