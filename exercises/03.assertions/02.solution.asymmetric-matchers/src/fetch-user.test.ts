import { fetchUser } from './fetch-user'
import { userSchema } from './schemas'

test('returns the user by id', async () => {
	const user = await fetchUser('abc-123')
	expect(user).toEqual(expect.toMatchSchema(userSchema))
})
