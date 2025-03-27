import { test } from '../test-extend'

test('throws if the user is not found', async () => {
	const { queryUser } = await import('./query-user')

	await expect(queryUser('abc-123')).resolves.toBeUndefined()
})

test('returns the user by id', async ({ createMockDatabase }) => {
	const { queryUser } = await import('./query-user')

	await createMockDatabase((db, done) => {
		db.run(
			'INSERT INTO users (id, name) VALUES (?, ?)',
			['abc-123', 'John Doe'],
			done,
		)
	})

	await expect(queryUser('abc-123')).resolves.toEqual({
		id: 'abc-123',
		name: 'John Doe',
	})
})
