/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: '2rem',
        center: true,
        extend: {
            fontFamily: {
                roboto: ['Roboto', 'sans-serif']
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('prettier-plugin-tailwindcss')
    ],
}

