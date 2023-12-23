/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter Variable', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'primary': {
                    '50': '#eefbfd',
                    '100': '#d4f4f9',
                    '200': '#aee8f3',
                    '300': '#7bd7ea',
                    '400': '#38bad8',
                    '500': '#1c9dbe',
                    '600': '#1a7fa0',
                    '700': '#1c6682',
                    '800': '#1f556b',
                    '900': '#1e475b',
                    '950': '#0e2d3e',
                },
                'secondary': {
                    '50': '#f5f8f7',
                    '100': '#dee9e9',
                    '200': '#bcd3d3',
                    '300': '#92b6b6',
                    '400': '#6c9495',
                    '500': '#51797b',
                    '600': '#405f61',
                    '700': '#364d4f',
                    '800': '#2e3f41',
                    '900': '#293738',
                    '950': '#1c292b',
                },

                'success': {
                    '50': '#f0fdf4',
                    '100': '#ddfbe6',
                    '200': '#bdf5ce',
                    '300': '#7beaa0',
                    '400': '#4eda7d',
                    '500': '#26c15b',
                    '600': '#1a9f47',
                    '700': '#187d3b',
                    '800': '#186333',
                    '900': '#16512b',
                    '950': '#062d15',
                },
                'warning': {
                    '50': '#fbfbeb',
                    '100': '#f6f6cb',
                    '200': '#efec99',
                    '300': '#eae17b',
                    '400': '#dcc733',
                    '500': '#cdb125',
                    '600': '#b08c1e',
                    '700': '#8d671b',
                    '800': '#76531d',
                    '900': '#65461e',
                    '950': '#3a240e',
                },
                'danger': {
                    '50': '#fdf3f3',
                    '100': '#fbe5e5',
                    '200': '#f9cfcf',
                    '300': '#f3aeae',
                    '400': '#ea7b7b',
                    '500': '#de5555',
                    '600': '#ca3838',
                    '700': '#a92c2c',
                    '800': '#8c2828',
                    '900': '#752727',
                    '950': '#3f1010',
                },
            },
        },
    },
    plugins: [],
}

