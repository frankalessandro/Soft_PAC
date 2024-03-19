/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			colors: {
				'color-base': '#38A901',
				'color-base-hover':'#4FF00160',
				'lightGreen': '#E7FFFF',
				'darkGreen': '#008080',
				'moreDarkGreen': '#062F2F'
			  },
			  spacing:{
				'160':'80vh'
			  },
			  backgroundImage:{
				'content': 'url("./src/assets/fondo6.jpg")',
				'icon':'url("./src/assets/idea.png")',
			  },
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
