import { fetchUser } from './fetch-user'
import { userSchema } from './schemas'

test('fetches the user', async () => {
	const user = await fetchUser('abc-123')
	expect(user).toMatchSchema(userSchema)
})
