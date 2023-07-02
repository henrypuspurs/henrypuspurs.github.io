/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			dropShadow: {
				'top-md': [
					'0 -4px 3px rgb(0 0 0 / 0.07)',
					'0 -2px 2px rgb(0 0 0 / 0.06)'
				]
			}
		}
	},

	plugins: [ require('@tailwindcss/typography')]
};

module.exports = config;
