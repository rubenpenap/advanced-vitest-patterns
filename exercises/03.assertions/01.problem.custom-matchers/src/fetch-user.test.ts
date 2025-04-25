import { fetchUser } from './fetch-user'
import { userSchema } from './schemas'

test('returns the user by id', async () => {
	const user = await fetchUser('abc-123')

	// 💣 Remove this object parsing.
	// Your custom matcher will perform the parsing now.
	const result = userSchema.safeParse(user)

	// 💣 Remove both of these assertions.
	expect(result.error).toBeUndefined()
	expect(result.data).toEqual({
		id: 'abc-123',
		name: 'John Maverick',
	})

	// 🐨 Add a single assertion over the `user` object
	// as the received value, using the `.toMatchSchema()` matcher.
	// Provide the `userSchema` as the expected value.
	// 💰 expect(this).toMatchSchema(that)
})
