import { fetchPosts } from './fetch-posts'

test('returns a list of posts', async () => {
	const response = await fetchPosts()

	expect(response.status).toBe(200)
	expect(response.headers.get('cache-control')).toBe(
		'public, max-age=31536000, immutable',
	)
	await expect(response.json()).resolves.toEqual([
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
