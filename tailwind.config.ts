import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '0.5rem',
				sm: '1rem',
				md: '2rem',
				xl: '0rem',
			},
		},
		extend: {
			typography: ({ theme }: { theme: any }) => ({
				emerald: {
					css: {
						'--tw-prose-body': theme('colors.gray[300]'),
						'--tw-prose-headings': theme('colors.emerald[500]'),
						'--tw-prose-lead': theme('colors.emerald[500]'),
						'--tw-prose-links': theme('colors.emerald[500]'),
						'--tw-prose-bold': theme('colors.gray[200]'),
						'--tw-prose-counters': theme('colors.emerald[500]'),
						'--tw-prose-bullets': theme('colors.emerald[500]'),
						'--tw-prose-hr': theme('colors.gray[700]'),
						'--tw-prose-quotes': theme('colors.emerald[500]'),
						'--tw-prose-quote-borders': theme(
							'colors.emerald[500]'
						),
						'--tw-prose-captions': theme('colors.gray[400]'),
						'--tw-prose-code': theme('colors.pink[600]'),
						'--tw-prose-pre-code': theme('colors.gray[200]'),
						'--tw-prose-pre-bg': theme('colors.gray[900]'),
						'--tw-prose-th-borders': theme('colors.gray[300]'),
						'--tw-prose-td-borders': theme('colors.gray[400]'),
						'--tw-prose-invert-body': theme('colors.emerald[200]'),
						'--tw-prose-invert-headings': theme('colors.white'),
						'--tw-prose-invert-lead': theme('colors.emerald[300]'),
						'--tw-prose-invert-links': theme('colors.white'),
						'--tw-prose-invert-bold': theme('colors.white'),
						'--tw-prose-invert-counters': theme(
							'colors.emerald[400]'
						),
						'--tw-prose-invert-bullets': theme(
							'colors.emerald[600]'
						),
						'--tw-prose-invert-hr': theme('colors.emerald[700]'),
						'--tw-prose-invert-quotes': theme(
							'colors.emerald[100]'
						),
						'--tw-prose-invert-quote-borders': theme(
							'colors.emerald[700]'
						),
						'--tw-prose-invert-captions': theme(
							'colors.emerald[400]'
						),
						'--tw-prose-invert-code': theme('colors.white'),
						'--tw-prose-invert-pre-code': theme(
							'colors.emerald[300]'
						),
						'--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
						'--tw-prose-invert-th-borders': theme(
							'colors.emerald[600]'
						),
						'--tw-prose-invert-td-borders': theme(
							'colors.emerald[700]'
						),
					},
				},
				DEFAULT: {
					css: {
						img: {
							width: '100%',
							borderRadius: '0.25rem'
						},
					},
				},
			}),
		},
	},
	corePlugins: {
		aspectRatio: false,
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/typography'),
	],
}
export default config
