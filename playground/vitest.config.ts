import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		globals: true,
		coverage: {
			enabled: true,
			include: ['src/**/*.ts'],
			provider: 'v8',
			reporter: ['text', 'html'],
		},
	},
})
