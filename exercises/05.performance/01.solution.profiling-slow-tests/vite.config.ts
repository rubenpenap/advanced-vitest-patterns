/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import { vitestProfiler } from 'vitest-profiler/plugin'

export default defineConfig({
	plugins: [vitestProfiler()],
	server: {
		port: process.env.PORT ? Number(process.env.PORT) : undefined,
	},
	test: {
		globals: true,
	},
})
