/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
	server: {
		port: process.env.PORT ? Number(process.env.PORT) : undefined,
	},
	test: {
		globals: true,
		setupFiles: ['./vitest.setup.ts'],
	},
})
