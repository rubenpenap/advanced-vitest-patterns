addEventListener('fetch', (event) => {
	event.respondWith(
		Response.json({
			id: 'abc-123',
			name: 'John Maverick',
		}),
	)
})
