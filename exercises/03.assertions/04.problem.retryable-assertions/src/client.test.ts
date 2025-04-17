import { Client } from './client'

test('receives a basket of fruits', async () => {
	const client = new Client()
	const responseListener = vi.fn()
	client.request('fruits', responseListener)

	// 💣 Delete this `vi.waitFor()` block.
	// You will replace it with something else in a moment.
	await vi.waitFor(() => {
		expect(responseListener).toHaveBeenCalledWith(['apple', 'banana', 'cherry'])
	})

	// 🐨 Create a polling assertion by using `expect.poll()`.
	// 💰 await expect.poll(() => received).toHaveBeenCalledWith(expected)

	// 🐨 Use the same list of fruits as the expected value for the assertion.
	// 💰 ['apple', 'banana', 'cherry']
})
