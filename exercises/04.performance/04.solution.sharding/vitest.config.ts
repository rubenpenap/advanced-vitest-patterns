import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		globals: true,
		isolate: false,
	},
	plugins: [
		{
			name: 'transform-throttle-plugin',
			async transform(code, id) {
				/**
				 * @note This intentionally slows down test file processing
				 * so we are able to see the performance benefits of sharding easier.
				 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
				 * YOU DO NOT NEED TO HAVE THIS IN YOUR VITEST CONFIG.
				 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
				 */
				if (/\/tests\/test-\d+\.test\.ts$/.test(id)) {
					const start = Date.now()
					while (Date.now() - start < 10) {}
				}
				return code
			},
		},
	],
})
