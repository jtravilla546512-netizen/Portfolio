import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './index.html',
        './resources/js/**/*.{js,jsx}',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                mono: ['"Fira Code"', ...defaultTheme.fontFamily.mono],
            },
            colors: {
                // Remap slate → warm dark greys (ties into #292323 background)
                slate: {
                    50:  '#f5f4f4',
                    100: '#e8e5e5',
                    200: '#ccc9c9',
                    300: '#b5b0b0',
                    400: '#9c9999',  // #9c9999
                    500: '#857878',
                    600: '#71706e',  // #71706e
                    700: '#524848',
                    800: '#3d3333',
                    900: '#2e2626',
                    950: '#292323',  // #292323 — main background
                },
                // Remap indigo → red accent (#990303)
                indigo: {
                    50:  '#fef2f2',
                    100: '#fee2e2',
                    200: '#fecaca',
                    300: '#e07070',
                    400: '#c44040',
                    500: '#990303',  // #990303 — primary accent
                    600: '#7a0202',
                    700: '#5c0202',
                    800: '#3d0101',
                    900: '#2d0101',
                    950: '#1a0000',
                },
                // Remap violet → deeper red
                violet: {
                    50:  '#fef2f2',
                    100: '#fee2e2',
                    200: '#fecaca',
                    300: '#f87171',
                    400: '#a82020',
                    500: '#850202',
                    600: '#660202',
                    700: '#4d0101',
                    800: '#330101',
                    900: '#1a0000',
                    950: '#0d0000',
                },
            },
        },
    },

    plugins: [forms],
};
