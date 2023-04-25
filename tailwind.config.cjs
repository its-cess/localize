/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			poppins: ['Poppins', 'sans-serif'],
			quicksand: ['Quicksand', 'sans-serif']
		},
		extend: {
			colors: {
				aqua: '#1C768F',
				carrotOrange: '#FA991C',
				daisyBush: '#4714A5',
				iceBlue: '#9CF6F6',
				lavenderIndigo: '#8657E1',
				monsoon: '#777878',
				silver: '#C0C0C0',
				whisper: '#F9F4F9'
			}
		}
	},
	plugins: []
};
