/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				secondaryBrown: "#8A8475",
			},
			fontFamily: {
				jost: ["Jost", "sans-serif"],
			},
		},
	},
	plugins: ["@tailwindcss/forms"],
};
