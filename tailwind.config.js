/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                george: ["George", "sans-serif"],
                syne: ["Syne", "sans-serif"],
                fira: ["Fira Sans", "sans-serif"],
                outfit: ["Outfit", "sans-serif"],
                Inter: ["Inter", "sans-serif"],
            },
            colors: {
                transparent: "transparent",
                primary: "#ff317b",
                secondary: "#5650ce",
                success: "#2d4186",
                warning: "#9aace5",
                info: "#b3d4fc",
                white: "#ffffff",
            },
            boxShadow: {
                pagination_Shadow: "0px 15px 30px 0px rgb(119 123 146 / 20%)",
                cardShadow: "0px 10px 5px 0px rgb(119 123 146 / 2%)",
            },
            lineClamp: {
                7: "7",
                8: "8",
                10: "10",
            },
        },
    },
    plugins: [require("@tailwindcss/line-clamp")],
};
