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
					environment: 'edge-runtime',
					globals: true,
					include: ['**/*.edge.test.ts'],
				},
			},
		],
	},
})
