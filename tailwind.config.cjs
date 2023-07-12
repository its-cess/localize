/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			poppins: ['Poppins', 'sans-serif'],
			quicksand: ['Quicksand', 'sans-serif']
		},
		extend: {
			boxShadow: {
				colored: '0px 7px 16px rgba(28, 118, 143, 0.3)',
				coloredHover: '0px 16px 25px rgba(28, 118, 143, 0.3)',
				slidePanel: '-4px 0px 44px rgba(0, 0, 0, 0.25)',
				tableRow: '0px 0px 6px rgba(0, 0, 0, 0.16)'
			},
			colors: {
				aqua: '#1C768F',
				carrotOrange: '#FA991C',
				daisyBush: '#4714A5',
				iceBlue: '#9CF6F6',
				lavenderIndigo: '#8657E1',
				monsoon: '#777878',
				naplesYellow: '#f4d35e',
				scarlet: '#f72f45',
				silver: '#C0C0C0',
				whisper: '#F9F4F9'
			},
			zIndex: {
				modal: 999,
				slidePanel: 998,
				overylay: 997
			}
		},
		screens: {
			'xs': '590px',
			'merchantForm': '1100px'
		}
	},
	plugins: []
};
