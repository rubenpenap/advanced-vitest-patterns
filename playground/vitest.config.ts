import { defineConfig } from 'vitest/config'
// 🐨 Import `vitestProfiler` from `vitest-profiler/plugin`

export default defineConfig({
	// 🐨 Add a `plugins` property at the root of the Vitest configuration.
	// Make it equal an array. Inside that array, call the `vitestProfiler`
	// function you imported earlier.
	// 💰 plugins: [somePlugin()],
	test: {
		globals: true,
	},
})
