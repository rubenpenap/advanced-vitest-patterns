import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		globals: true,
		// 🐨 Add a `setupFiles` property and make it equal an array.
		// In that array, provide a relative path to the "./test-extend.ts" module.
		// 💰 setupFiles: [filePath]
	},
})
