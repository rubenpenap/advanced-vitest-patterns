import { defineConfig } from 'vitest/config'
import { vitestProfiler } from 'vitest-profiler/plugin'

export default defineConfig({
	plugins: [vitestProfiler()],
	test: {
		globals: true,
	},
})
