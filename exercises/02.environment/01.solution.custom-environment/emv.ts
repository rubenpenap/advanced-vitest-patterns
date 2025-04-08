import { Environment, builtinEnvironments } from 'vitest/environments'

export default <Environment>{
	name: 'custom-env',
	transformMode: 'ssr',
	async setup(global, options) {
		const { teardown } = await builtinEnvironments.node.setup(global, options)

		return {
			teardown,
		}
	},
}

/**

1. Polyfill something unavailable in the main environment.

2. Perform a test suite-wide side effect necessary for the tests to run.

3. Testing code that's not meant to run in Node/browser (e.g. edge, Cloudflare Workers, etc).

*/
