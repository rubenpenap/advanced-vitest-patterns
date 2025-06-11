import { fetchPosts } from './fetch-posts'

test('returns a list of posts', async () => {
	const response = await fetchPosts()

	expect.soft(response.status).toBe(200)
	expect
		.soft(response.headers.get('cache-control'))
		.toBe('public, max-age=31536000, immutable')
	await expect.soft(response.json()).resolves.toEqual([
		{
			id: expect.any(String),
			title: 'Soft Assertions',
		},
		{
			id: expect.any(String),
			title: 'Implicit Assertions',
		},
	])
})
