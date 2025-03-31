import { Client } from './client'

test('receives a basket of fruits', async () => {
	const client = new Client()
	const responseListener = vi.fn()
	client.request('fruits', responseListener)

	await expect
		.poll(() => responseListener)
		.toHaveBeenCalledWith(['apple', 'banana', 'cherry'])
})
