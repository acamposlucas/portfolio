/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Open Sans", "sans-serif"],
				heading: ["Poppins", "sans-serif"],
			},
		},
	},
	corePlugins: {
		fontSize: false,
	},
	plugins: [require("tailwindcss-fluid-type")],
};
