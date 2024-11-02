import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	  site: 'https://papasoft.com',
	  integrations: [
		starlight({
			title: 'Papasoft',
			logo: {
				light: './src/assets/papasoft-logo.svg',
				dark: './src/assets/papasoft-logo-dark.svg',
				replacesTitle: true,
			  },
			social: {
				github: 'https://github.com/papasoft',
				linkedin: 'https://www.linkedin.com/in/ricktuttledev/',
				instagram: 'https://www.instagram.com/papasoft/'
			},
			sidebar: [
				{
					label: 'Papasoft',
					items: [
						{ label: 'Rick Tuttle', slug: 'papasoft/about-rick-tuttle'},
						{ label: 'Mentoring', slug: 'papasoft/mentoring'},
					],
				},
				{
					label: 'Career Guide',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Intro', slug: 'career/intro' },
					],
				},
				{
					label: 'Resources',
					autogenerate: { directory: 'resources' },
				},
			],
		}),
	],
});
