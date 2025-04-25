import { fetchUser } from './fetch-user'
import { userSchema } from './schemas'

test('returns the user by id', async () => {
	const user = await fetchUser('abc-123')
	// 🦉 The call signature of `expect.toMatchSchema()` must be correct.
	expect(user).toEqual(expect.toMatchSchema(userSchema))
})
