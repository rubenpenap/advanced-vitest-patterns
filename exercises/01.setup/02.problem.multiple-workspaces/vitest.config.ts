import { defineConfig, configDefaults } from 'vitest/config'

export default defineConfig({
	test: {
		// 🐨 Add a property called `workspace`.
		// Assign it an array as a value.
		// 💰 workspace: []
		//
		// 🐨 Add the first object to the `workspace` array.
		// Inside that object, define a property called `test`.
		// This will be your configuration for unit tests.
		// Describe it accordingly, giving it a distinct `name`,
		// `environment`, and `include` and `exclude` patterns.
		// 💰 test: { name: 'unit', environment: 'node', globals: true }
		//
		// 🐨 Add the second object to the `workspace` array.
		// Similarly to the first one, this will be your configuration for edge tests.
		// Give it a `name`, and use `edge-runtime` as its `environment`.
		// Don't forget to specify the `include` pattern so it applies only
		// to the "**/*.edge.test.ts" test files.
		// 💰 test: { name: '...', environment: '...', globals: true }
	},
})
