import type { Config } from "tailwindcss";

const config = {
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
				active: "#1C6DC1",
				"light-gray": "#F7F7F7",
				"border-gray": "#E5E5E5"
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
} satisfies Config;

export default config;
