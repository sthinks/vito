/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            fontFamily: {
                custom: ["Kumbh Sans", "Urbanist", "sans-serif"],
            },
        },
    },
    plugins: [require("@tailwindcss/aspect-ratio")],
};
