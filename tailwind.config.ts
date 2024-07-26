import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			colors: {
				primary: "#0D447C",
				secondary: "#116236",
				"new-white": "#FBFBFC",
				active: "#1C6DC1"
			}
		},
		variants: {
			extend: {
				display: ["group-hover"],
				width: ["group-hover"]
			}
		}
	},
	plugins: []
};
export default config;
