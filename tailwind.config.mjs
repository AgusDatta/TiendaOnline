/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		screens: {
			'sm': '640px',
			'md': '1024px',  // Ajuste personalizado para el punto de interrupción md
			'lg': '1280px',
			'xl': '1536px'
		},
	},
	plugins: [],
}
