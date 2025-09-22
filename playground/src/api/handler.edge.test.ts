import { EdgeRuntime } from 'edge-runtime'
import initialCode from './handler?raw'

const runtime = new EdgeRuntime({ initialCode })

test('returns the user by id', async () => {
	const response = await runtime.dispatchFetch(
		'https://example.com/users/abc-123',
	)
	await expect(response.json()).resolves.toEqual({
		id: 'abc-123',
		name: 'John Maverick',
	})
})
