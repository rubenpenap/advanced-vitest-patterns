import { defineConfig, configDefaults } from 'vitest/config'

export default defineConfig({
	test: {
		projects: [
			{
				test: {
					name: 'unit',
					environment: 'node',
					globals: true,
					include: ['**/*.test.ts'],
					exclude: [...configDefaults.exclude, '**/*.edge.test.ts'],
				},
			},
			{
				test: {
					name: 'edge',
					globals: true,
					environment: 'edge-runtime',
					include: ['**/*.edge.test.ts'],
				},
			},
		],
	},
})
