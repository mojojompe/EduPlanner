/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#009EBA",
                secondary: "#ffffff",
                accent: "#f0f0f0",
            },
            fontFamily: {
                poppins: ["Poppins"],
            }
        },
    },
    plugins: [],
}
