/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'primary': 'hsl(75, 94%, 57%)',
			'white': 'hsl(0, 0%, 100%)',
			'grey-700': 'hsl(0, 0%, 20%)',
			'grey-800': 'hsl(0, 0%, 12%)',
			'grey-900': 'hsl(0, 0%, 8%)',
		},
		screens: {
			'mb': '375px',
			'xl': '1440px'
		},
		extend: {},
	},
	plugins: [],
}
